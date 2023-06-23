<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\UpdateRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Image;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UpdateController extends Controller
{
    public function __invoke(Post $post, UpdateRequest $request)
    {
        $data = $request->validated();

        $images = isset($data['images']) ? $data['images'] : null;

        $dropImages = isset($data['id_images_for_deleting']) ? $data['id_images_for_deleting'] : null;

        unset($data['images'], $data['id_images_for_deleting']);

        $currentImages = $post->images;

        if ($dropImages) {
            foreach ($currentImages as $currentImage) {
                if (in_array($currentImage->id, $dropImages)) {
                    Storage::disk('public')->delete($currentImage->path);
                    Storage::disk('public')->delete(str_replace('images/', 'images/prev_', $currentImage->path));
                    $currentImage->delete();
                }
            }
        }

        if ($images) {
            foreach ($images as $image) {
                $name = md5(Carbon::now() . '_' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();

                $filePath = Storage::disk('public')->putFileAs('/images', $image, $name);

                $previewName = "prev_$name";

                Image::create([
                    'path' => $filePath,
                    'url' => url("/storage/$filePath"),
                    'preview_url' => url("/storage/images/$previewName"),
                    'post_id' => $post->id
                ]);

                \Intervention\Image\Facades\Image::make($image)
                    ->fit(100, 100)
                    ->save(storage_path("app/public/images/$previewName"));
            }
        }

        $post->update($data);

        return new PostResource($post);
    }
}

<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\StoreRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Image;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();

        $images = $data['images'];

        $dropUrlImages = isset($data['url_images_for_deleting']) ? $data['url_images_for_deleting'] : null;

        unset($data['images'], $data['url_images_for_deleting']);

        $post = Post::create($data);

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

        if($dropUrlImages) {
            foreach ($dropUrlImages as $dropUrlImage) {
                $removeStr = $request->root() . '/storage/';
                $path = str_replace($removeStr, '', $dropUrlImage);
                Storage::disk('public')->delete($path);
            }
        }

        return new PostResource($post);
    }
}

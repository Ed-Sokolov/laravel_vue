export const setCursorAfterAddingImageInEditor = (Editor, url) => {
    let newP = document.createElement('p')

    const customClass = url.split('.').join('_');

    newP.classList.add(customClass)

    Editor.container.querySelector(`img[src="${url}"]`).parentNode.parentNode.insertBefore(newP, Editor.container.querySelector(`img[src="${url}"]`).parentNode.nextSibling)

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(newP);
    selection.removeAllRanges();
    selection.addRange(range);

    newP.classList.remove(customClass)
}

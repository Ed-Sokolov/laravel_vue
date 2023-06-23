export const getAnimatedContent = (selector = '#content') => {
    const children = document.querySelector(selector).childNodes;

    const getRandom = () => {
        return Math.floor(Math.random() * 3)
    }

    children.forEach(child => {
        if (child.childNodes[0].tagName === 'BR') {
            child.remove()
        }
    })

    children.forEach(child => {
        const div = document.createElement("div")
        const copy = child.cloneNode(true)
        div.appendChild(copy)

        div.classList.add('row');
        div.classList.add('col-lg-9');
        div.classList.add('mx-auto');

        const random = getRandom();

        switch (random) {
            case 0:
                div.setAttribute('data-aos', 'fade-right')
                break
            case 1:
                div.setAttribute('data-aos', 'fade-left')
                break
            default:
                div.setAttribute('data-aos', 'fade-up')
        }

        child.parentNode.replaceChild(div, child)
    })
}

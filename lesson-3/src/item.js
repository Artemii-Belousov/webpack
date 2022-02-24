const ITEM_TYPES = {
    image: drawImage,
    audio: drawAudio,
    video: drawVideo,
}

function drawImage(item) {
    const imgElement = document.createElement('img')
    imgElement.className = 'gallery-item__image'
    imgElement.src = item.resours;

    return imgElement
}

function drawAudio(item) {
    const audioElement = document.createElement('audio')
    audioElement.className = 'gallery-item__audio'
    audioElement.src = item.resours;
    audioElement.controls = true;

    return audioElement
}
function drawVideo(item) {
    const audioElement = document.createElement('video')
    videoElement.className = 'gallery-item__video'
    videoElement.src = item.resours;
    videoElement.controls = true;
}

export function drawGalleryItem(item){
    const itemElement = document.createElement('div')
    itemElement.classList = 'gallery-item'

    const resoursWrapElement = document.createElement('div')
    resoursWrapElement.className = 'gallery-item__resours'

    const drawForType = ITEM_TYPES[item.type]
    resoursWrapElement.appendChild(drawForType(item))

    const titleElement = document.createElement('span')
    titleElement.classList = 'gallery-item__title'
    titleElement.textContent = item.title

    itemElement.appendChild(resoursWrapElement)
    itemElement.appendChild(titleElement)

    return itemElement
}

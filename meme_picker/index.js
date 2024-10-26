import { catsData } from "./data.js"

const emotionsEl = document.getElementById('emotion-radios')
const getImgBtn = document.getElementById('get-image-btn')
const gifOnlyCheck = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const closeModalBtn = document.getElementById('meme-modal-close-btn')

emotionsEl.addEventListener('change', highlightCheckedOption)
closeModalBtn.addEventListener('click', closeModal)
getImgBtn.addEventListener('click', renderCat)

function closeModal() {
    memeModal.style.display = 'none'
}

function highlightCheckedOption(e) {
    const radioEl = document.getElementsByClassName('radio')

    for (let radio of radioEl)
        radio.classList.remove('highlight')
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function renderCat() {
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML = `
    <img 
        class="cat-img"
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
    >`
    memeModal.style.display = 'flex'
}

function getSingleCatObject() {
    const catsArray = getMatchingCatsArray()

    if (catsArray.length === 1) {
        return catsArray[0]
    }
    else {
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
}

function getMatchingCatsArray() {
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifOnlyCheck.checked

        const matchingCatsArray = catsData.filter(function (cat) {

            if (isGif) {
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else {
                return cat.emotionTags.includes(selectedEmotion)
            }
        })
        return matchingCatsArray
    }
}

function getEmotionsArray(cats) {
    const emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            if (!emotionsArray.includes(emotion))
                emotionsArray.push(emotion)
        }
    }
    return (emotionsArray)
}

function renderEmotionsRadios(cats) {
    let radioItems = ``
    const emotions = getEmotionsArray(cats)

    for (let emotion of emotions) {
        radioItems += `<div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions">
        </div>`
    }
    emotionsEl.innerHTML = radioItems
}

renderEmotionsRadios(catsData)

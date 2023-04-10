// Element variables

const homepageMainImageContainer = document.querySelector('#homepage-main-image-container');
const homepageCarrossel = homepageMainImageContainer.querySelector('#main-homepage-images');
const imageSelector = homepageMainImageContainer.querySelector('#image-selector');
const imageSelectorNext = imageSelector.querySelector('#next-comparison-image-button');
const imageSelectorPrevious = imageSelector.querySelector('#previous-comparison-image-button');
const imageSelectorText = imageSelector.querySelector('#image-selection-text');

let currentCarrosselImage = null;

// Value variables

let currentHomepageImageIndex = 0;
let allCarrosselImages = 0;

const evals = {'next': '+', 'previous': '-'};

// MISC variables

const comparisonsPath = "./images/comparisons";

// Load

const checkLoaded = setInterval(() => {
    if (loaded) {
        clearInterval(checkLoaded);
        currentCarrosselImage = homepageCarrossel.querySelector('.juxtapose-0');
        allCarrosselImages = homepageCarrossel.querySelectorAll('.juxtapose').length;
        imageSelectorText.textContent = '1/' + allCarrosselImages;
    }
}, 100)


// Main

// eval((currentCarrosselImage.toString() + evals[destination] + '1').toString())

function changeImage(destination) {
    if (destination === 'next' || destination === 'previous') {
        let equation = eval((currentHomepageImageIndex.toString() + evals[destination] + '1').toString())
        if (equation < 0) {
            equation = allCarrosselImages - 1;
        } else if (equation >= allCarrosselImages) {
            equation = 0;
        }
        homepageCarrossel.querySelector('.juxtapose-' + equation).style.order = 1;
        currentCarrosselImage.style.order = 2;
        currentCarrosselImage = homepageCarrossel.querySelector('.juxtapose-' + equation);
        currentHomepageImageIndex = Number(currentCarrosselImage.id.split('juxtapose-embed-')[1]);
        imageSelectorText.textContent = (currentHomepageImageIndex + 1) + '/' + allCarrosselImages;
    }
}

imageSelectorNext.addEventListener('click', () => {changeImage('next')});
imageSelectorPrevious.addEventListener('click', () => {changeImage('previous')});
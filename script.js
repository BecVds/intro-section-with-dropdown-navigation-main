const MENU_OPEN_BUTTON = document.querySelector('.open');
const MENU_CLOSE_BUTTON = document.querySelector('.close');
const SIDE_NAV = document.querySelector('.mobile-display');
const BUTTON_FEATURES = document.querySelector('.features-button');
const BUTTON_COMPANY = document.querySelector('.company-button');
const SUB_OPTIONS_FEATURES = document.querySelector('.features');
const SUB_OPTIONS_COMPANY = document.querySelector('.company');
const OVERLAY = document.querySelector('.overlay');

const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleTabletChange(e) {
    if (e.matches) {      
        SIDE_NAV.classList.add('hidden');
        OVERLAY.classList.add('hidden');
        console.log('Media Query Matched!')
    }
}

handleTabletChange(mediaQuery)

function onInit() {
    MENU_OPEN_BUTTON.addEventListener('click', menuController);
    MENU_CLOSE_BUTTON.addEventListener('click', menuController);
    
    BUTTON_FEATURES.addEventListener('click', featuresButtonController);
    BUTTON_COMPANY.addEventListener('click', companyButtonController);  

    mediaQuery.addEventListener('change', handleTabletChange);  
}


function menuController() {
    SIDE_NAV.classList.toggle('hidden');
    OVERLAY.classList.toggle('hidden');
}

function featuresButtonController() {
    let arrow = BUTTON_FEATURES.querySelector('img');
    SUB_OPTIONS_FEATURES.classList.toggle('hidden');
    arrow.classList.toggle('rotated');
}

function companyButtonController() {
    let arrow = BUTTON_COMPANY.querySelector('img');
    SUB_OPTIONS_COMPANY.classList.toggle('hidden');
    arrow.classList.toggle('rotated');
}

onInit();
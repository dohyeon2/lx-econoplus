document.head.insertAdjacentHTML('afterbegin', '<link rel="preload" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" crossorigin>');
document.head.insertAdjacentHTML('afterbegin', '<link rel="stylesheet" href="font.css">');
document.head.insertAdjacentHTML('afterbegin', '<link rel="preload" href="fonts/GodoB.otf" as="font" type="font/otf" crossorigin>');
document.head.insertAdjacentHTML('afterbegin', '<link rel="preload" href="fonts/GodoM.otf" as="font" type="font/otf" crossorigin>');
document.head.insertAdjacentHTML('afterbegin', '<link rel="preload" href="fonts/Kudryashev.woff2" as="font" type="font/woff2" crossorigin>');

if (document.head.querySelector('link[rel="icon"]')) {
    document.head.querySelector('link[rel="icon"]').href = 'favicon.ico';
} else {
    document.head.insertAdjacentHTML('beforeend', '<link rel="icon" href="favicon.ico">');
}
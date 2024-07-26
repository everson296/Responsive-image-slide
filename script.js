let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let carousel = document.querySelector('.carousel');
let listItem = document.querySelector('.carousel .list');
let thumbnail = document.querySelector('.carousel .thumbnail');


next.addEventListener('click', () => {
    showSlider('next')
})

prev.addEventListener('click', () => {
    showSlider('prev')
})


let timeRunning = 2400;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRum = setTimeout(() => {
    next.click();
}, timeAutoNext);


const showSlider = (type) => {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItem.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumbnail[0]);
        carousel.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[positionLastItem]);
        thumbnail.prepend(itemThumbnail[positionLastItem]);
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRum);
    runAutoRum = setTimeout(() => {
        next.click();
    }, timeAutoNext);
}
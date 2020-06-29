const imageList = [{
        img: 'London.jpg',
        text: 'London'
    },
    {
        img: 'Madrid.jpg',
        text: 'Madrid'
    },
    {
        img: 'Barcelona.jpg',
        text: 'Barcelona'
    }
];

const time = 3000;
let activeImage = 0;

const image = document.querySelector('img.slider');
const header = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

function changeDot() {
    let activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[activeImage].classList.add('active');
}

function changeImage() {
    activeImage++;
    if (activeImage === imageList.length) activeImage = 0;
    image.src = imageList[activeImage].img;
    header.textContent = imageList[activeImage].text;
    changeDot();
}

function keyImageChange(e) {
    if (e.which === 37 || e.which === 39) {
        clearInterval(interval);
        e.which === 37 ? activeImage-- : activeImage++;
        activeImage < 0 ? activeImage = imageList.length - 1 : activeImage === imageList.length ? activeImage = 0 : activeImage;
        image.src = imageList[activeImage].img;
        header.textContent = imageList[activeImage].text;
        changeDot();
        interval = setInterval(changeImage, time);
    }
}

window.addEventListener('keydown', keyImageChange);
let interval = setInterval(changeImage, time);
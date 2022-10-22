"use strict";
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
//display all images in HTML, all of them have d-none;
const displayImages = function(item, index){
    const showHTML = document.getElementById('show');
    const col = document.createElement('div');
    col.className = 'landscape-wrapper d-none';

    const colContent = `
    <img class="landscape fade" src="${item.url}" alt="${item.title} landscape">
    <div class="caption position-absolute">
        <h2 class="country">${item.title}</h2>
        <h4 class="description">${item.description}</h4>
        <span class='drag-down'><i class="fa-solid fa-caret-down"></i></span>
    </div>
    `;

    col.innerHTML += colContent;

    showHTML.append(col);

    const miniaturesHTML = document.querySelector('.miniatures');

    const minContent = `
    <div class="miniature micro" style="background-image: url(${item.url}); background-size: cover;"></div>
    `;

    miniaturesHTML.innerHTML += minContent;
}

images.forEach(displayImages);

//toggle d-none when a specific condition is met
function displayLand(){

    let activeLand = 0;
    let counter = 5000;
    let landscapesHTML = document.querySelectorAll('.landscape-wrapper');
    let microsHTML = document.querySelectorAll('.miniature');
    let repeat;
    let forward = true;

    //show first landscape + miniature;
    landscapesHTML[activeLand].classList.toggle('d-none');
    microsHTML[activeLand].classList.toggle('micro');

    //auto-play slideshow: interval function, forwards or backwards.
    const slideshow = () => {
        if(forward){
            repeat = setInterval(function(){
                landscapesHTML[activeLand].classList.toggle('d-none');
                microsHTML[activeLand].classList.toggle('micro');
                activeLand++;
                if(activeLand == landscapesHTML.length){
                    activeLand = 0;
                }
                landscapesHTML[activeLand].classList.toggle('d-none');
                microsHTML[activeLand].classList.toggle('micro');
            }, counter);
        }
        else if(!forward){
            repeat = setInterval(function(){
                landscapesHTML[activeLand].classList.toggle('d-none');
                microsHTML[activeLand].classList.toggle('micro');
                activeLand--;
                if(activeLand < 0){
                    activeLand = landscapesHTML.length - 1;
                }
                landscapesHTML[activeLand].classList.toggle('d-none');
                microsHTML[activeLand].classList.toggle('micro');
            }, counter);
        }

    }
    slideshow();

    //toLeft landscape button
    const btnLeft = document.querySelector('.toggle-land.toLeft');
    btnLeft.addEventListener('click', function(){
        landscapesHTML[activeLand].classList.toggle('d-none');
        microsHTML[activeLand].classList.toggle('micro');
        activeLand--;
        if(activeLand < 0){
            activeLand = landscapesHTML.length - 1;
        }
        landscapesHTML[activeLand].classList.toggle('d-none');
        microsHTML[activeLand].classList.toggle('micro');
    });
    //toRight landscape button
    const btnRight = document.querySelector('.toggle-land.toRight');
    btnRight.addEventListener('click', function(){
        landscapesHTML[activeLand].classList.toggle('d-none');
        microsHTML[activeLand].classList.toggle('micro');
        activeLand++;
        if(activeLand == landscapesHTML.length){
            activeLand = 0;
        }
        landscapesHTML[activeLand].classList.toggle('d-none');
        microsHTML[activeLand].classList.toggle('micro');
    })

    //pause/resume auto-play slideshow
    const pausePlayHTML = document.querySelector('.pausePlay');
    let status = 0;
    pausePlayHTML.addEventListener('click', function(){
        const landscapeHTML = document.querySelectorAll('.landscape');
        console.log(landscapeHTML);
        landscapeHTML.forEach((item) => item.classList.toggle('fade'));
        pausePlayHTML.classList.toggle('play');
        pausePlayHTML.classList.toggle('pause');
        (pausePlayHTML.classList.contains('play'))? pausePlayHTML.innerHTML = `<i class="fa-solid fa-play"></i>` : pausePlayHTML.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        
        if(status == 0){
            clearInterval(repeat);
            status = 1;
            console.log(status);
        }
        else if(status == 1){
            slideshow();
            status = 0;
            console.log(status);
        }
    });
    //invert slideshow
    const reverseHTML = document.querySelector('.reverse');
    reverseHTML.addEventListener('click', function(){
        if(forward){
            forward = false;
            clearInterval(repeat);
            reverseHTML.classList.toggle('action');
        }
        else if(!forward){
            forward = true;
            clearInterval(repeat);
            reverseHTML.classList.toggle('action');
        }
        slideshow();
    });
}

displayLand();
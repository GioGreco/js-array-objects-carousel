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

// for(let landscape of images){
//     createCol(landscape);
// }

// function createCol(member){
//     const showHTML = document.getElementById('show');
//     const col = document.createElement('div');
//     col.className = 'landscape-wrapper d-none';

//     const colContent = `
//     <img class="landscape" src="${member.url}" alt="${member.title} landscape">
//     <div class="caption position-absolute">
//         <h2 class="country">${member.title}</h2>
//         <h4 class="description">${member.description}</h4>
//     </div>
//     `;

//     col.innerHTML += colContent;

//     showHTML.append(col);

//     const slideshow = setInterval(toggleShow, 3000);

//     const toggleShow = 

// }

const displayImages = function(item, index){
    const showHTML = document.getElementById('show');
    const col = document.createElement('div');
    col.className = 'landscape-wrapper d-none';

    const colContent = `
    <img class="landscape" src="${item.url}" alt="${item.title} landscape">
    <div class="caption position-absolute">
        <h2 class="country">${item.title}</h2>
        <h4 class="description">${item.description}</h4>
    </div>
    `;

    col.innerHTML += colContent;

    showHTML.append(col);
}

images.forEach(displayImages);

function displayLand(){
    let activeLand = 0;
    let landscapesHTML = document.querySelectorAll('.landscape-wrapper');
    landscapesHTML[activeLand].classList.toggle('d-none');
    setInterval(function(){
        landscapesHTML[activeLand].classList.toggle('d-none');
        activeLand++;
        if(activeLand == landscapesHTML.length){
            activeLand = 0;
        }
        landscapesHTML[activeLand].classList.toggle('d-none');
    }, 5000);
}

displayLand();
const slides = document.querySelectorAll('.slide')
const slider = document.querySelector('.slider')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const carousel = document.querySelector('.carousel')
var direction =1;
const totalSlide = slides.length;

prevBtn.addEventListener('click', ()=>{
    if(direction=== -1){
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    carousel.style.justifyContent = 'flex-end'
    slider.style.transform = 'translate(20%)'
})
nextBtn.addEventListener('click', ()=>{
    if(direction=== 1){
        slider.prepend(slider.lastElementChild);
        direction = -1;
    }
    carousel.style.justifyContent = 'flex-start'
    slider.style.transform = 'translate(-20%)'
})
slider.addEventListener('transitionend', ()=>{
    if(direction === -1){
        slider.appendChild(slider.firstElementChild);
    }
    else if(direction === 1){
        slider.prepend(slider.lastElementChild);

    }
    console.log("appended")
    slider.style.transition = 'none'
    slider.style.transform = 'translate(0)'
    setTimeout(()=>{slider.style.transition = 'all 0.5s'})
})

setInterval(()=>{ if(direction=== 1){
    slider.prepend(slider.lastElementChild);
    direction = -1;
}
carousel.style.justifyContent = 'flex-start'
slider.style.transform = 'translate(-20%)'
},5000)

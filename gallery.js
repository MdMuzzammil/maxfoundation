

let hamburger = document.querySelector('.hamburger-g');
let itemList = document.querySelectorAll('.list-item-g');
let mobLogo = document.querySelector('.mobile-logo-g');

hamburger.addEventListener('click', (element) => {
    if(itemList[1].style.display != 'none'){
        itemList.forEach((element) => {element.style.display = 'none';element.style.transition='1s'});

        mobLogo.style.display= 'block';
    }
    else{
        itemList.forEach((element) => {element.style.display = 'block'});
        mobLogo.style.display= 'none';
    }
})








const callBtn = document.querySelector('.call-btn')
const showCall = document.querySelector('.show-call')
const hideCall = document.querySelector('.hide-call')
// console.log(forwardCall)
// console.log(backwardCall)
function toggleCall (){
    if(callBtn.style.right != '-130px'){
        console.log('2 called')
        callBtn.style.right="-130px"
        showCall.style.display='none'
        hideCall.style.display='block'
        callBtn.style.transition= '0.5s';
    }
    else{
        callBtn.style.transition= '0.5s';
        callBtn.style.right="0px"
        showCall.style.display='block'
        hideCall.style.display='none'

    }
}





////////////////////////////////////////////////////////////////


close = document.querySelector(".close")
photos = document.querySelectorAll('.photo');
galleryButton = document.querySelectorAll('gallery-button');
nextBtn = document.querySelector(".next")
prevBtn = document.querySelector(".prev")
console.log(photos.length)
function closeAll(){
    nextBtn.classList.remove("active-button")
    prevBtn.classList.remove("active-button")
    photos.forEach((n)=>{
        n.classList.remove("preview-active");
        close.classList.remove("preview-active")


    })
}
let imageIndex=0;
function openImg(o){
    o = photos.length-1-o;
    showImg( imageIndex =o)
}

function showImg(imageIndex){
    photos[imageIndex].classList.add("preview-active");
    close.classList.add("preview-active")
    prevBtn.classList.add("active-button")
    nextBtn.classList.add("active-button")
    // console.log("active button added")
}
function nextImg(){
    imageIndex+=1;
    if(imageIndex>=photos.length){
        imageIndex=0;
    }
    closeAll();
    showImg(imageIndex)
}
function prevImg(){
    imageIndex-=1;
    if(imageIndex<0){
        imageIndex=photos.length-1;
    }
    closeAll();
    showImg(imageIndex)
}





// lazy load 
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });
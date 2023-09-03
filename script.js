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

// -------------------for review--------------------------
let reviewIndex = 0
const reviews= document.getElementsByClassName("student-testimonial");
// console.log(reviews);
for(i=0; i<reviews.length;i++){
    // console.log("aligned successfull" + i);
    reviews[i].style.left = `${i*25}rem`;
}

// console.log(reviews.length)
setInterval(function(){
    nextReview();

    // console.log("slideShow Automatic triggered")
},5000)


function nextReview(){
    reviewIndex=reviewIndex+1;
    if(reviewIndex>reviews.length-3){
        reviewIndex=0;
    }
    autoReview(reviewIndex);
};
function prevReview(){
    reviewIndex=reviewIndex-1;
    if(reviewIndex<0){
        reviewIndex=reviews.length-3;
    }
    autoReview(reviewIndex);
};


function autoReview(reviewIndex){
    for(let i = 0; i < reviews.length; i++){
        
        reviews[i].style.transform = `translateX(-${reviewIndex*25}rem)`;
        reviews[i].style.transition = '0.5s';
    }
};














// ================================================================================================================================
// animate number
// ================================================================================================================================










// for(i=0; i<counterNumber.length; i++){
//     updatenumber();
//         function updatenumber (){
//             const targetNumber = parseInt(counterNumber[i].dataset.num);
//             console.log(targetNumber);
//             const initialNumber = parseInt(counterNumber[i].innerText);
//             const incrementNumber = targetNumber/speed;
//             if(initialNumber < targetNumber){
//                 counterNumber[i].innerText = (incrementNumber + initialNumber) + "+";
//                 setTimeout(updatenumber,20);
//             }
//         };
// }

const workSectionAchievement = document.querySelector(".achievement");
// console.log(workSectionAchievement)
workObserver = new IntersectionObserver((entries, observer)=>{
    const [entry] = entries;
    // console.log(entry);

    if(!entry.isIntersecting)return;
        
const counterNumber = document.querySelectorAll(".counter-number");
const speed=17;
counterNumber.forEach(element => {
    updatenumber();
    function updatenumber (){
        const targetNumber = parseInt(element.dataset.num);
        // console.log(targetNumber);
        const initialNumber = parseInt(element.innerText);
        const incrementNumber = Math.trunc(targetNumber/speed);
        if(initialNumber < targetNumber){
            element.innerText = (incrementNumber + initialNumber) + "+";
            setTimeout(updatenumber,300);
        }
    };
    
});
observer.unobserve(workSectionAchievement);

},{
    root: null,
    threshold:0,
});
workObserver.observe(workSectionAchievement);


// ================================================================================================================================
// animate number end
// ================================================================================================================================




let hamburger = document.querySelector('.hamburger');
let itemList = document.querySelectorAll('.list-item');
let mobLogo = document.querySelector('.mobile-logo');
let mobLogoP = document.querySelector('.mobile-logo-parent');

hamburger.addEventListener('click', (element) => {
    if(itemList[1].style.display != 'block'){
        itemList.forEach((element) => {element.style.display = 'block'});
        mobLogo.style.display= 'none';
        mobLogoP.style.display= 'none';
    }
    else{
        itemList.forEach((element) => {element.style.display = 'none';element.style.transition='1s'});

        mobLogo.style.display= 'block';
        mobLogoP.style.display= 'block';
        
    }
    // if(itemList[1].style.display != 'none'){
    //     itemList.forEach((element) => {element.style.display = 'none';element.style.transition='1s'});

    //     mobLogo.style.display= 'block';
    //     mobLogoP.style.display= 'block';
    // }
    // else{
    //     itemList.forEach((element) => {element.style.display = 'block'});
    //     mobLogo.style.display= 'none';
    //     mobLogoP.style.display= 'none';
    // }
})
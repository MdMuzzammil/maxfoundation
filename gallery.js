

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
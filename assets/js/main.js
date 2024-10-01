'use strict'

let menuElems = document.querySelectorAll('.menu-elem');

menuElems.forEach(menuElem =>{
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu-btn');

    menuElem.addEventListener('mouseenter', function(){
        submenu.classList.add('active')
        btn.classList.add('active')
    } )

    menuElem.addEventListener('mouseleave', function(){
        submenu.classList.remove('active')
        btn.classList.remove('active')
    })
})


let sliderBody = document.querySelector('.slider-body');
let sliderNav = document.querySelector('.slider-nav');
let sliderImages = document.querySelector('.slider-images');
let sliderItems = Array.from(document.querySelectorAll('.slider-item'));
let sliderDots = Array.from(document.querySelectorAll('.slider-dot'));

sliderNav.addEventListener('click', function(event){
    let targetArrow = event.target.closest('.slider-arrow');
    if(!targetArrow) return;

    let currentActiveImage = document.querySelector('.slider-item.active');
    let currentActiveIndex = sliderItems.indexOf(currentActiveImage);

    currentActiveImage.classList.remove('active');
    document.querySelector('.slider-dot.active').classList.remove('active');

    changeActive(targetArrow, currentActiveIndex);

    let newActiveImage = document.querySelector('.slider-item.active');
    let newActiveIndex = sliderItems.indexOf(newActiveImage);

    scrollSlider(newActiveIndex);
})

function scrollSlider(index){
    sliderImages.style.transform = `translateX(${-100*index}%)`
}

function changeActive(arrow, currentIndex){
    if(arrow.classList.contains('left')){
        if(currentIndex == 0){
            sliderItems.at(-1).classList.add('active');
            sliderDots.at(-1).classList.add('active');
        }else{
            sliderItems[currentIndex-1].classList.add('active');
            sliderDots[currentIndex-1].classList.add('active');
        }
    }else{
        if(currentIndex == sliderItems.length - 1){
            sliderItems[0].classList.add('active');
            sliderDots[0].classList.add('active');
        }else{
            sliderItems[currentIndex+1].classList.add('active');
            sliderDots[currentIndex+1].classList.add('active');
        }
    }
}

sliderNav.addEventListener('click', function(event){
    let targetDot = event.target.closest('.slider-dot');
    if(!targetDot) return;

    if(targetDot.classList.contains('active')) return;

    document.querySelector('.slider-dot.active').classList.remove('active');
    targetDot.classList.add('active');
    document.querySelector('.slider-item.active').classList.remove('active');

    sliderItems[targetDot.dataset.index].classList.add('active');  
    scrollSlider(targetDot.dataset.index);
})





document.addEventListener('DOMContentLoaded', function () {
    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {

            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            tabPanes.forEach(function (pane) {
                pane.classList.remove('active');
            });

            this.classList.add('active');
            tabPanes[index].classList.add('active');
        });
    });
});




let toTopBtn = document.querySelector('.totop');
let faqBlock = document.querySelector('.faq-block');

let observer = new IntersectionObserver(
    (entries) =>{
        entries.forEach((entry) =>{
            if(entry.isIntersecting){
                toTopBtn.classList.add('show');
            }else{
                toTopBtn.classList.remove('show');
            }
        });
    },
    
);

observer.observe(faqBlock);



document.querySelector('.faq').addEventListener('click', function(event){
    let target = event.target.closest('.faq-item');
    if(!target) return;

    target.classList.toggle('active');
    let p = target.querySelector('p');
    let h4 = target.querySelector('h4');
    if(target.classList.contains('active')){
        p.style.height = p.scrollHeight + 'px';
        h4.style.transform = 'rotate(45deg)';
        p.style.marginTop = '10px';
    }else{
        p.style.height = '';
        h4.style.transform = 'rotate(0deg)';
        p.style.marginTop = '';
    }

})




let modal = document.querySelector(".modal");
let span = document.getElementsByClassName("close")[0];

window.onload = function () {
  setTimeout(function () {
    modal.style.display = "block";
  }, 3000);
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

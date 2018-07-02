var btn1 = document.querySelector('button');
var close = document.querySelector('.close');
var grey = document.querySelector('.dialog');
var aside = document.querySelector('aside');
var btn2 = document.querySelector('button.mgt')


close.addEventListener('click' , function (){
    grey.style.display = 'none';
aside.style.display = 'none';
})

btn1.addEventListener('click' , function (){
    grey.style.display = 'block';
    aside.style.display = 'block';
    })
btn2.addEventListener('click' , function (){
    grey.style.display = 'block';
    aside.style.display = 'block';
    })
    
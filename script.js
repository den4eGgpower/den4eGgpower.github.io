var btn1 = document.querySelector('button');
var close = document.querySelector('.close');
var grey = document.querySelector('.dialog');
var aside = document.querySelector('aside');
var btn2 = document.querySelector('button.mgt')
var phone = document.querySelector('.phone')


close.addEventListener('click' , function (){
    grey.style.display = 'none';
aside.style.display = 'none';

btn2.style.display = 'block'
})

btn1.addEventListener('click' , function (){
    grey.style.display = 'block';
    aside.style.display = 'block';
  
btn2.style.display = 'none'
    })
btn2.addEventListener('click' , function (){
    grey.style.display = 'block';
    aside.style.display = 'block';
    btn2.style.display = 'none'
    })
phone.addEventListener('click' , function (){
        grey.style.display = 'block';
        aside.style.display = 'block';
        btn2.style.display = 'none'
        })
grey.addEventListener('click' , function(){
    grey.style.display = 'none';
aside.style.display = 'none';

btn2.style.display = 'block'

})
document.addEventListener('keyup', function (e) {
    if(e.keyCode === 27) {
    grey.style.display = 'none';
    aside.style.display = 'none';
    
    btn2.style.display = 'block'
    }
    
  }); 
    
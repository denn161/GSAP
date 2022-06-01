const startAnimation =()=>{

  console.log('start')

  const currentSlide =document.querySelector('.slide__bg--current')
  const currentShapes =document.querySelector('.shapes__item--current')
  const currentText  =document.querySelector('.slides__container-slide--active')


  tween.to('.header',0.8,{
      y:0,
      opacity:1,
      delay:.2
  }).to('.main__section-subtitle',0.8,{
      y:0,
      opacity:1,
     
  }, '-=0.8').to(currentText.querySelector('.slides__container-title'),{
       y:0,
       opacity:1
  },'-=0.2').to(currentText.querySelector('.designers__info'),{
    y:0,
    opacity:1
},'-=0.4').from(currentSlide, 0.4, {
    xPercent: 100,
   }, '-=0.4')
  .from(currentSlide.querySelector('.slide__bg-link'), 0.4, {
    xPercent: -100,
   
     
  }, '-=0.4').from(currentShapes, 0.6, {
    xPercent: 100,  
     
    }, '-=0.2')
  .from(currentShapes.querySelector('.shapes__content'), 0.6, {
    xPercent: -100,
    delay:-0.6    
     
  }, '-=0.6')

}


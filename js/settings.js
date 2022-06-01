const bgItems = document.querySelectorAll('.slide__bg-link'),
      bgInners = document.querySelectorAll('.slide__bg-inner'),
      shapesItems = document.querySelectorAll('.shapes__item'),
      shapesContents =document.querySelectorAll('.shapes__content'),
      helperInput = document.querySelector('#helper-input'),
      cursor = document.querySelector('.mouse'),
      slidesBg=document.querySelector('.slides__container-bg'),
      links = document.querySelectorAll('#link'),
      mainSection =document.querySelector('.main__section '),
      preolader =document.querySelector('.preloader')

      const sizeSlides = slidesBg.childElementCount
      let slideCounter = 1;

     const easeng= BezierEasing(0.770, 0.125, 0.265, 1.040) 

     const startComplete = ()=>{
         bgInners.forEach((item)=>item.style.opacity=1)
         shapesItems.forEach((item)=>item.style.opacity=1)

     }
     const removeOpacity = ()=>{
        bgInners.forEach((item)=>item.style.opacity=0)
        shapesItems.forEach((item)=>item.style.opacity=0)
     }
    
     const tween =gsap.timeline({defaults:{ease:easeng},onComplete:function(){
           startComplete()
     }})
    
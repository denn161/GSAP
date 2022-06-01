const textSlides =(derection)=>{

    let currentSlides =document.querySelector('.slides__container-slide--active')

    let nextSlide = derection==='down'?currentSlides.nextElementSibling:currentSlides.previousElementSibling

        if(nextSlide&&!nextSlide.classList.contains('main__section-subtitle')){                 

            const tween =gsap.timeline({defaults:{ease:easeng}})

            tween.to(currentSlides.querySelector('.slides__container-title'),0.6,{
                y:100,
                opacity:0
           }).to(currentSlides.querySelector('.designers__info'),0.6,{
             y:100,
             opacity:0,
          },'-=0.6').to(nextSlide.querySelector('.slides__container-title'),0.6,{
            y:0,
            opacity:1
       },'-=0.1').to(nextSlide.querySelector('.designers__info'),0.6,{
         y:0,
         opacity:1
     },'-=0.6')        
             
             currentSlides.classList.remove('slides__container-slide--active')
             nextSlide.classList.add('slides__container-slide--active')
            
        }

}
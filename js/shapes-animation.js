const shapesSlides =(derection)=>{

    let currentShapes =document.querySelector('.shapes__item--current')

    let nextSlide = derection==='down'?currentShapes.nextElementSibling:currentShapes.previousElementSibling

        if(nextSlide){
            shapesItems.forEach((item)=>item.classList.remove('index'))          

            const tween =gsap.timeline({defaults:{ease:easeng},onComplete:function(){
                  currentShapes.classList.add('index')
          }})

             tween.from(nextSlide,0.5,{
                 xPercent:100,
                 delay:0.5

             }).from(nextSlide.querySelector('.slide__bg-link'),0.5,{
                 xPercent:-100,
                 delay:-1
             })

             currentShapes.classList.remove('shapes__item--current')
             nextSlide.classList.add('shapes__item--current')
            
        }

}
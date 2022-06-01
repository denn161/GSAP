const imagesSlides =(derection)=>{

    let currentSlide =document.querySelector('.slide__bg--current')

    let nextSlide = derection==='down'?currentSlide.nextElementSibling:currentSlide.previousElementSibling

        if(nextSlide){
            bgInners.forEach((item)=>item.classList.remove('index'))          

            const tween =gsap.timeline({defaults:{ease:easeng},onComplete:function(){
                  currentSlide.classList.add('index')
          }})

             tween.from(nextSlide,0.5,{
                 xPercent:100

             }).from(nextSlide.querySelector('.slide__bg-link'),0.5,{
                 xPercent:-100,
                 delay:-0.5
             })

             currentSlide.classList.remove('slide__bg--current')
             nextSlide.classList.add('slide__bg--current')
            
        }

}
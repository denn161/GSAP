   
  
    const headerBtn = document.querySelector('.burger')
    const headerNav = document.querySelector('.header__nav')
    
    headerBtn.addEventListener('click',()=>{
         const position = getComputedStyle(headerNav).position
           if(position==='fixed'){
               headerNav.classList.toggle('hidden-nav')
           }
    
    })
    
    
    function init(){

      window.onload=function(){  
      
        removeOpacity()
        tween.to(preolader,{
          opacity:.9,
          duration:3,
          onStart:function(){
            window.removeEventListener('wheel',activeScroll)
            cursor.style.display='none'
            preolader.style.display='flex'          
            gsap.to('.preloader__forward',{
               opacity:1,
               duration:2,
               y:-50,
              ease:'bounce'
            })
            gsap.to('.preloader__bg',{
               width:330,
               delay:.2,             
               
            })  
            
          },
        
        })          
        tween.to('.preloader__bg',{
          width:0,

        }, '+=1')  
        
        tween.to('.preloader__forward',{
          opacity:0,
          y:-20,
         ease:'bounce'

       }, '+=0.5')

        tween.to(preolader,{
          opacity:0,
          onComplete:function(){   
            window.addEventListener('wheel',activeScroll)         
            cursor.style.display='block'
            preolader.style.display='none'
                

            startAnimation()         

          },        
         
        },'+=1')     

      }
    
       const showNextSlides =()=>{
           bgSlides('down')
           imagesSlides('down')
           shapesSlides('down')
           textSlides('down')
    
       }
    
       const showPrevSlides =()=>{
          bgSlides('up')
          imagesSlides('up')
          shapesSlides('up')
          textSlides('up')
       }

       function activeScroll(e){
        const delta = -e.deltaY
    
        if(delta>0){
          if(helperInput.value==='1'){
             helperInput.value=0
             showPrevSlides()
             setTimeout(()=>{
               helperInput.value=1
             },1000)
          }
  
        }else{
          if(helperInput.value==='1'){
            
            helperInput.value=0
            showNextSlides()
            setTimeout(()=>{
              helperInput.value=1
            },1000)
         }
  
        }
       }




    
       if(window.innerWidth>768){
         
        window.addEventListener('wheel',activeScroll)
    
       }else{
         document.addEventListener('swiped-left',()=>{
            showNextSlides()
          
    
         })
    
         document.addEventListener('swiped-right',()=>{
           showPrevSlides()
         })
       }
    
    
    
    
    }
    
    init()
   
/**
 * Поработать с курсором
 * Анимация стартовая
 * Анимация слева
 * Анимация справа
 * Анимация шейпов
 * Глобальные настройки
 * 
 * 
 * 
 * 
 */
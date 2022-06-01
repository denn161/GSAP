   
  function mouseMove(){
    const body =document.querySelector('body')
  
	let mouseX = 0, mouseY = 0, posX = 0, posY = 0

    function mouseCoords(e){
        mouseX=e.clientX
        mouseY = e.clientY

       }
       gsap.to({},0.1,{
        repeat:-1,
        onRepeat:function(){
            posX+=(mouseX - posX) / 4
            posY+=(mouseY - posY) / 4
           gsap.set(cursor,{
                css:{
                    left:posX,
                    top:posY
                }

            })
        }
    })

    body.addEventListener('mousemove',(e)=>{
        mouseCoords(e)
        cursor.classList.remove('hidden')

    })

    body.addEventListener('mouseout',(e)=>{
      cursor.classList.add('hidden')

   })
   
   links.forEach((link)=>{
    link.addEventListener('mouseover',()=>{
        cursor.classList.add('active-mouse')
    })

    link.addEventListener('mouseout',()=>{
        cursor.classList.remove('active-mouse')
    })
})
  }

  if(window.innerWidth>768){
      mouseMove()
  }


  slidesBg.addEventListener('mouseover',()=>{
      cursor.classList.add('mouse-view')           

  })

  slidesBg.addEventListener('mouseout',()=>{
    cursor.classList.remove('mouse-view')           

})

function moveMouse(e) {
    if (e.clientX < 5 || e.clientY < 5 || e.clientY > (window.innerHeight - 5) || e.clientX > (window.innerWidth - 5)) {
      mouse.style.opacity = 0;
    } else {
      cursor.style.opacity = 1;
      cursor.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    }
  };



  
    
  
  
  
  
 
 shapesContents.forEach((item)=>item.style.background=item.getAttribute('data-bg') )

 bgItems.forEach((item)=>item.style.backgroundImage=`url(${item.dataset.bg })`)


 const bgSlides = (derection)=>{

  let itemClass =`slide-${slideCounter}`

   if(derection==='down'){
       if(slideCounter<sizeSlides){
          mainSection.classList.remove(itemClass);
          slideCounter++

           itemClass =`slide-${slideCounter}`
           mainSection.classList.add(itemClass)    

       }     

   }else{
    if(slideCounter>1){
        mainSection.classList.remove(itemClass);
        slideCounter--

         itemClass =`slide-${slideCounter}`
         mainSection.classList.add(itemClass) 

     }     

   }

      

 }
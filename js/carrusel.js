const d=document;
document.addEventListener("DOMContentLoaded",slider());
 function slider(){
    const $nextBTN=d.querySelector(".slider-btns .next"),
    $prevBTN=d.querySelector(".slider-btns .prev"),
    $slides=d.querySelectorAll(".slider-slide");
    
    let i=0;
    
  d.addEventListener("click", e=>{
      if(e.target===$prevBTN){
          e.preventDefault();
    $slides[i].classList.remove("active");
    i--;
          
    if(i<0){
    i= $slides.length-1;
    }
        $slides[i].classList.add("active");

          
      }
    
    if(e.target===$nextBTN){
    e.preventDefault();
    $slides[i].classList.remove("active");
    i++;
          
    if(i>=$slides.length){
    i=0;
    }
        $slides[i].classList.add("active");

          
      }
      
      
      
  });  
}
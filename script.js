let cursor = document.querySelector("#cursor")
let cursorblur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
      cursor.style.left = dets.x + "px";
      cursor.style.top = dets.y + "px";
      cursorblur.style.left = dets.x - 130+ "px";
      cursorblur.style.top = dets.y - 130 + "px";
   
      



})
















gsap.to("#nav",{
    backgroundColor:"black",
    height:"100px",

    duration:0.5,
    delay:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        
        start:"top -10%",
        end:"top -15%",
        scrub:1,

    }
  
    

})
gsap.to("#nav img",{
    height:"60px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav img",
        scroller:"body",
        
        start:"top -10%",
        end:"top -15%",
        scrub:1,
    } 
})
    gsap.to("#main",{
        backgroundColor:"black",
        scrollTrigger:{
            trigger:"#main",
            scroller:"body",
            // markers:true,
            start:"top -20%",
            end:"top -100%",
            
            scrub:2,


        }

    })
gsap.from("#aboutus img,#about",{
    y:70,
    opacity:0,
  
    duration:2,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3,
    }
})
gsap.from(".card",{
    x:-100,
    
    opacity:-5,
  
    duration:5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3,
    }
})
gsap.from("#colon1",{
    y:-90,
    x:-90,
    duration:5,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})
gsap.from("#colon2",{
    y:90,
    x:90,
    duration:5,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})
gsap.from(".ele",{
    y:50,
    
    opacity:0,
  
    duration:5,
    scrollTrigger:{
        trigger:".ele",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub:3,
    }
})

         


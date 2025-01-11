var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    blur.style.left = dets.x -150+"px";
    blur.style.top = dets.y -150 +"px";
});
gsap.to(".nav", {
    backgroundColor:"#000",
    height:"150px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -10%",
        end: "end -11%",
        scrub:1,
    }
})
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller: "body",
        start:"top -50%",
        end:"top -100%",
        scrub:2,
    }
})

gsap.from(".about-us img,#about-us-in",{
    y:80,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start: "top 70%",
        end: "top 65%",
        // markers:true,
        scrub: 1,
    }
});

gsap.from("#one",{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:one,
        scroller:"body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})
gsap.from("#two",{
    y:70,
    x:70,
    duration:1,
    scrollTrigger:{
        trigger:one,
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})
gsap.from(".page4 h1",{
    y:80,
    duration:2,
});
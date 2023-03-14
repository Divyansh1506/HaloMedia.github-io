// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#bg"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#bg", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
// });



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();






gsap.from(".first .first-inner .image",{
    opacity:0,
    duration:2,
    delay:1,
    scale:1.2
})
gsap.from("nav",{
    duration:2,
    delay:1,
    y:-50,
})
gsap.from(".first .first-inner h1",{
    duration:1,
    // delay:1,
    rotate:"10deg",
    stagger:1
})


gsap.to(".first .first-inner h1:nth-child(1)",{
    scrollTrigger:{
        trigger:".first h1:nth-child(2)",
        scroller:"body",
        start: "top 50%",
        end: "bottom 50%",
        // markers:true,
        scrub:2,
        duration:5,
    },
    x:50,
})

gsap.to(".first .first-inner h1:nth-child(2)",{
    scrollTrigger:{
        trigger:".first h1:nth-child(2)",
        scroller:"body",
        start: "top 50%",
        end: "bottom 20%",
        // markers:true,
        scrub:2,
        duration:5,
    },
    x:-100,
    // ease:"expo",
    // power:5,
})
gsap.to(".first .first-inner .main2-image",{
    scrollTrigger:{
        trigger:".first .first-inner .main2-image",
        scroller:"body",
        start: "top 50%",
        end: "bottom 50%",
        // markers:true,
        scrub:2,
        duration:5,
    },
    y:-200,
    // ease:"expo",
    // power:5,
})
gsap.to(".first .first-inner p",{
    scrollTrigger:{
        trigger:".first .first-inner .main2-image",
        scroller:"body",
        start: "top 50%",
        end: "bottom 50%",
        // markers:true,
        scrub:2,
        duration:5,
    },
    y:-70,
    // ease:"expo",
    // power:5,
})
gsap.to(".first .first-inner h2",{
    scrollTrigger:{
        trigger:".first .first-inner .main2-image",
        scroller:"body",
        start: "top 50%",
        end: "bottom 50%",
        // markers:true,
        scrub:2,
        duration:5,
    },
    y:-70,
    // ease:"expo",
    // power:5,
})

gsap.to(".second .second-inner .inner-video",{
    scrollTrigger:{
        trigger:".second .second-inner .inner-video",
        scroller:"body",
        start: "top 80%",
        end: "bottom 90%",
        // markers:true,
        scrub:3,
        duration:5,
    },
    y:-300,
    // ease:"expo",
    // power:5,
})

gsap.from(".third h1:nth-child(1)",{
    scrollTrigger:{
        trigger:".third h1:nth-child(1)",
        scroller:"body",
        start: "top 80%",
        end: "bottom 25%",
        // markers:true,
        scrub:3,
        duration:5,
    },
    x:300,
})

gsap.from(".third h1:nth-child(2)",{
    scrollTrigger:{
        trigger:".third h1:nth-child(1)",
        scroller:"body",
        start: "top 80%",
        end: "bottom 25%",
        // markers:true,
        scrub:1,
        duration:5,
    },
    x:-300,
})

gsap.from(".third .image",{
    scrollTrigger:{
        trigger:".third",
        scroller:"body",
        start: "top 95%",
        end: "bottom 75%",
        // markers:true,
        scrub:1,
        duration:5,
    },
    scale:1.2,
})

gsap.from(".fourth-inner",{
    scrollTrigger:{
        trigger:".fourth-inner",
        scroller:"body",
        start: "top 45%",
        end: "bottom 75%",
        // markers:true,
        scrub:1,
        duration:5,
    },
    y:-200,
})




gsap.to(".sixth h1:nth-child(1)",{
    scrollTrigger:{
        trigger:".sixth",
        scroller:"body",
        start: "top 70%",
        end: "bottom 50%",
        // markers:true,
        // pin:true,
        scrub:1,
        duration:5,
    },
    y:-100,
})
gsap.to(".sixth h1:nth-child(2)",{
    scrollTrigger:{
        trigger:".sixth",
        scroller:"body",
        start: "top 70%",
        end: "bottom 50%",
        // markers:true,
        // pin:true,
        scrub:1,
        duration:5,
    },
    y:-100,
})


// gsap.to(".fifth .fifth-inner .inner-box1",{
//     scrollTrigger:{
//         trigger:".fifth",
//         scroller:"body",
//         start: "top 0%",
//         end: "bottom 50%",
//         // markers:true,
//         pin:true,
//         scrub:1,
//         duration:5,
//     },
//     x:500,
//     opacity:0,
//     height:"350px",
//     width:"250px"
// })

// gsap.to(".fifth .fifth-inner .inner-box3",{
//     scrollTrigger:{
//         trigger:".fifth",
//         scroller:"body",
//         start: "top 0%",
//         end: "bottom 0%",
//         // markers:true,
//         pin:true,
//         scrub:1,
//         // duration:5,
//     },
//     x:-850,
//     opacity:0,
//     height:"350px",
//     width:"250px"
// })




// gsap.to(".fifth .fifth-inner .inner-box2",{
//     scrollTrigger:{
//         trigger:".fifth",
//         scroller:"body",
//         start: "top 0%",
//         end: "bottom 0%",
//         markers:true,
//         pin:true,
//         scrub:2,
//     },
//     scale:3.5,
// })



// gsap.to(".fifth .fifth-inner .inner-box img",{
//     scrollTrigger:{
//         trigger:".fifth",
//         scroller:"body",
//         start: "top 0%",
//         end: "bottom 70%",
//         // markers:true,
//         pin:true,
//         scrub:2,
//     },
//     opacity:0,
// })



gsap.to(".sixth .blank",{
    scrollTrigger:{
        trigger:".sixth",
        scroller:"body",
        start: "top 50%",
        end: "bottom 70%",
        // markers:true,
        scrub:2,
    },
    scale:1.2,
    y:-50
})


gsap.to(".sixth p",{
    scrollTrigger:{
        trigger:".sixth",
        scroller:"body",
        start: "top 0%",
        end: "bottom 50%",
        // markers:true,
        scrub:2,
    },
    y:-100
})
gsap.to(".sixth a",{
    scrollTrigger:{
        trigger:".sixth",
        scroller:"body",
        start: "top 0%",
        end: "bottom 50%",
        // markers:true,
        scrub:2,
    },
    y:-50
})
gsap.from(".seventh .sm-image",{
    scrollTrigger:{
        trigger:".seventh",
        scroller:"body",
        start: "top 20%",
        end: "bottom 80%",
        // markers:true,
        // pin:true,
        scrub:2,
    },
    y:500
})

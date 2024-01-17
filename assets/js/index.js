// gsap.to("#box", {
//   x: 900,
//   y:300,
//   duration: 2,
//   delay:1,
//   backgroundColor:"green",
//   rotate:360,
//   scale:1.5,
// });
gsap.to(".mybox", {
  duration: 2,
  //   repeat:-1,
  //   yoyo: true,
  stagger: 1,
  backgroundColor: "yellow",
  rotate: 360,
  scrollTrigger: {
    trigger: ".mybox",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    scrub: true,
  },
});

gsap.from(".box", {
  x: 900,
  y: 300,
  duration: 2,
  delay: 1,
  backgroundColor: "red",
  rotate: 360,
  //   scroll
  scale: 1.1,
  //   stagger ka metlab same naam ki element ko ak sath ak he time per animate kerna eske ander unke ak sath chelm]ne ke time ko delay ko likha jata hai
  stagger: 1,
  //   animate kitni bar chelnin cahiye
  // infinate chelane ke leye repeat ke value -1 deni pdege
  repeat: -1,
  //   yoyo ma metleb animate start to end or end to start chelti rehe ge
  yoyo: true,
});

var tl = gsap.timeline();
tl.to("h1", {
  x: 500,
  color: "red",
});
tl.to("h2", {
  x: 500,
  color: "blue",
});
tl.to("h3", {
  x: 500,
  color: "green",
});

gsap.from(".card-left-6", {
  x: -100,
  duration: 2,
  delay: 1,
  backgroundColor: "green",
  scrollTrigger: {
    trigger: ".card-left-6",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    scrub: true,
  },
});
gsap.from(".card-right-6", {
  x: 100,
  duration: 2,
  delay: 1,
  backgroundColor: "green",
  scrollTrigger: {
    trigger: ".card-right-6",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    scrub: true,
  },
});

gsap.from(".small-cards", {
  x: -400,
  duration: 2,
  delay: 1,
  opacity: 0,
  rotate: 30,
  stagger: 1,
  backgroundColor: "green",
  scrollTrigger: {
    trigger: ".small-cards",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 60%",
    scrub: true,
  },
});

gsap.to(".green-box1", {
  backgroundColor: "red",
  rotation: 360,
  duration: 2,
  xPercent: 440,
  yPercent: 300,
  yoyo:true,
  repeat:-1,
  ease: "bounce.out"
 
});
gsap.to(".green-box2", {
  backgroundColor: "skyblue",
  duration: 2,
  rotation: 360,
  xPercent: -440,
  yPercent: 300,
  yoyo:true,
  repeat:-1,
  ease: "bounce.out"
  
});
gsap.to(".green-box3", {
  backgroundColor: "yellow",
  duration: 2,
  xPercent: 440,
  yPercent: -300,
  rotation: 360,
  yoyo:true,
  repeat:-1,
  ease: "bounce.out"
  
});
gsap.to(".green-box4", {
  backgroundColor: "orange",
  duration: 2,
  xPercent: -440,
  yPercent: -300,
  rotation: 360,
  yoyo:true,
  repeat:-1,
  ease: "bounce.out"
  
});


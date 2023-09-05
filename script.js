var tl=gsap.timeline()

tl.from("#nav img,#nav h3, #nav h4,#nav button",{
  y:-100,
  duration:1,
  delay:1,
  opacity:0,
  stagger:0.2
})

tl.from("#main>h1",{
  // rotate:360,
  y:100,
  duration:0.5,
  stagger:0.5,
  // scale:0.1,
  opacity:0
})
tl.from("#main>img",{
  // rotate:360,
  // y:-100,
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.1,
})
tl.from("h5",{
  // rotate:360,
  // y:-100,
  scale:0,
  opacity:0,
  // duration:,
  // stagger:0.5,
})

tl.to("h5",{
  y:20,
  duration:0.5,
  repeat:-1,
  yoyo:true,
})
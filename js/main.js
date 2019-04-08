// Ajoutons le ScrollMagic
var controller = new ScrollMagic.Controller();

// ------------------------------------------------- SLIDE 1 (Play with Gsap)
var SloganAnimation = new TimelineMax();

SloganAnimation
    .from("#play", 2, {
    x:-600,
    opacity:0,
    })

    .from("#with", 0.5, {
    opacity:0,
    })

    .from("#gsap", 1, {
    y:400,
    opacity:0,
});

new ScrollMagic.Scene({
    triggerElement: "#slidein1", // L'élément à observer.
    triggerHook: "onEnter",// L'endroit de l'écran où l'animation commence
})
    .duration('500%') // Combien d'écran l'animation dure
    .setTween("#slidein1", { // Ajoute une animation gsap
        backgroundPosition: "0% 90%",
        ease: Linear.easeNone
    })
    .addTo(controller) // Ajoute l'animation au controller
    .addIndicators(); // Permet de voir les triggers

// ------------------------------------------------- SLIDE 2 (BANNIERE CHALET)
var AnimBanner = new TimelineMax();

AnimBanner
    .from ("#banner1", 1, {
    x:-500,
    opacity:0,
    scale: 0,
    rotation: 360,
    })

    .from ("#banner2", 1, {
    y:500,
    opacity:0,
    scale: 0,
    ease: Back.easeOut,
    },"-=1")

    .from ("#banner3", 1, {
    x:500,
    opacity:0,
    scale: 0,
    rotation: -360,
    },"-=1");

    new ScrollMagic.Scene({
        triggerElement: "#slidein2", 
        triggerHook: "onLeave",
    })
        .setTween(AnimBanner)
        .addTo(controller)
        .addIndicators()
        .setPin("#slidein2");

// ------------------------------------------------- SLIDE 3 (3 BLOCS DE TEXTE)
    
var blocstexte = TweenMax.staggerFrom(".box", 0.8, {
    x: -600,
    opacity: 0,
    ease: Back.easeOut,
},0.5);

new ScrollMagic.Scene({
    triggerElement: "#slidein3", 
    triggerHook: "onLeave",
})
    .setTween(blocstexte)
    .addTo(controller)
    .addIndicators()
    .setPin("#slidein3");

// ------------------------------------------------- SLIDE 4 (Zoom image montagne + texte)
var moutainscale = new TimelineMax();

moutainscale
   .to("#mountain2",1,{
    ease:Back.easeOut,
    scale: 2.5,
    })

    .staggerFrom(".staggerline",2,{
    x:765,
    ease:Bounce.easeOut,
    delay: 0.5,
    },0.5);

    new ScrollMagic.Scene({
        triggerElement: "#slidein4", 
        triggerHook: "onLeave",
    })
        .setTween(moutainscale)
        .addTo(controller)
        .addIndicators()
        .setPin("#slidein4");

// ------------------------------------------------- SLIDE 5 (Animation de rideaux + texte)

var curtains = new TimelineMax();

var text = TweenMax.from("#lastText",1,{opacity: 0,scale: 3,})
var left = TweenMax.from("#curtainLeft",0.5,{opacity: 0,y: 800,height: 0,})
var right = TweenMax.from("#curtainRight",0.5,{opacity: 0,x: 800,height: 0,})

curtains
    .add(left)
    .add(right)
    .add(text)

new ScrollMagic.Scene({
    triggerElement: "#slidein5", 
    triggerHook: "onLeave",
})
    .addTo(controller)
    .setTween(curtains)
    // .addIndicators()
    .setPin("#slidein5");




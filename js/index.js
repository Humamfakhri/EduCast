// For Live Projects
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  

    const kategoriSlide = new Splide( '.kategori-slide', {
        type       : 'loop',
        padding    : '5rem',
        perPage    : 4,
        perMove    : 1,
        gap        : '2rem',
        pagination : false,
        arrows     : false,
        drag       : 'free',
        breakpoints: {
            992 : {
                perPage : 2, 
            },
            576 : {
                perPage : 1,
            },
        },
        autoScroll: {
            speed: 1.3,
        },
    } );
    kategoriSlide.mount(window.splide.Extensions);
    
    var testi = new Splide( '.testi', {
        type   : 'loop',
        gap: 30,
        perPage: 2,
        autoplay: true,
        breakpoints: {
            992 : {
                perPage : 1, 
            },
            576 : {
                perPage : 1,
            },
        }
    } );
    testi.mount();
    
    const podcastSlide = new Splide( '.podcast-slide', {
        type: 'loop',
        perPage: 2,
        gap: 16,
        pagination: false,
        autoplay: true,
        breakpoints: {
            992 : {
                padding: {right: 80},
                perPage : 1, 
                arrows: false
            },
            576 : {
                padding: {right: 80},
                perPage : 1,
            },
        }
        
    })
    podcastSlide.mount();
    
    // HERO ANIMATION
    const hero = gsap.timeline({defaults:{opacity: 0, duration: 1}});
    hero.from('.hero-heading',{y: 400})
        .from('.hero-paragraf', {y: 300}, "<+=0.5")
        .from('.hero-buttons', {y: 200},"<+=0.5")
        .from('.hero-img', {x: 400},"<+=0.5")
                
    // FITUR ANIMATION
    const fitur = gsap.timeline({
        scrollTrigger: {
            trigger: ".heading-fitur",
            start: "top center", // when the top of the trigger hits the top of the viewport
            end: "-=150", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
    })
    fitur.to('.box-audiobook', {y: -150, x:-100, rotation: -9})
         .to('.box-podcast', {y: -300, rotation: -32}, "<")
         .to('.box-live', {y: -150, x: 100, rotation: 18}, "<")
    
    // DOWNLOAD ANIMATION
    const download = gsap.timeline({
        scrollTrigger: {
            start: 'top bottom',
            trigger: '.section-download',
            scrub: true
        },
    });
    
    download.to('.screen-app-l', {y: -400})
    download.to('.screen-app-r', {y: 400}, "<")
    gsap.to(".screen-app-hr", {
        x: -300,
        scrollTrigger: {
            start: 'top top',
            trigger: '.section-download',
            scrub: true
        },
    })
});
  
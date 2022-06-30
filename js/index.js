var viewportHeight = document.documentElement.clientHeight;

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

window.onscroll = () => {
    if (window.pageYOffset < viewportHeight/16){
        document.getElementById("title-banner").style.perspectiveOrigin = "50% calc(50% - 150px)";
    }
    else if (window.pageYOffset < viewportHeight/8){
        document.getElementById("title-banner").style.perspectiveOrigin = "50% calc(50% - 90px)";
    }
    else if (window.pageYOffset > viewportHeight/8){
        document.getElementById("title-banner").style.perspectiveOrigin = "50% calc(50% - 30px)";
    }

};

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


var viewportHeight = document.documentElement.clientHeight;
var pageHeight = document.documentElement.scrollHeight;
var progress;

const faders = document.querySelectorAll('.fade-in');
const progressBar = document.querySelector('.progress-bar');

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

const updateProgressBar = (progress) => {
    progressBar.ariaValueNow = progress;
    progressBar.style = "width: " + progress + "%";
};

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
    

    if (window.pageYOffset > pageHeight*0.8){
        updateProgressBar(100)
    }
    else if (window.pageYOffset > pageHeight*0.6){
        updateProgressBar(80)
    }
    else if (window.pageYOffset > pageHeight*0.4){
        updateProgressBar(60)
    }
    else if (window.pageYOffset > pageHeight*0.2){
        updateProgressBar(40)
    }
    else if (window.pageYOffset > 0) {
        updateProgressBar(20)
    } else {
        updateProgressBar(0)
    }

};

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


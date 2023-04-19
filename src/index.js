// video 1 animation
let position1 = 0;
const vitesse1 = 1200;
const video1 = document.getElementById("v0");

// video 2 animation
let position2 = 0;
const vitesse2 = 1200;
const video2 = document.getElementById("v1");

window.requestAnimationFrame(avanceVideos);

function avanceVideos() {
    let scrollPosition = window.pageYOffset;

    // syncroniser video 1
    position1 = scrollPosition / vitesse1;
    if (video1.readyState >= 3) {
        video1.currentTime = position1;
    }

    // syncroniser video 2
    if (scrollPosition >= 10000) {
        position2 = (scrollPosition - 10000) / vitesse2;
        if (video2.readyState >= 3) {
            video2.currentTime = position2;
        }
    }

    window.requestAnimationFrame(avanceVideos);
}

//épingles apparition

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 8500 && scrollPosition < 10000) {
        document.getElementById('marker').classList.add('visible');
        document.getElementById('marker').classList.remove('invisible');
        document.getElementById('beacon').classList.add('visible');
        document.getElementById('beacon').classList.remove('invisible');
        document.getElementById('marker2').classList.add('visible');
        document.getElementById('marker2').classList.remove('invisible');
        document.getElementById('beacon2').classList.add('visible');
        document.getElementById('beacon2').classList.remove('invisible');
        document.getElementById('marker3').classList.add('visible');
        document.getElementById('marker3').classList.remove('invisible');
        document.getElementById('beacon3').classList.add('visible');
        document.getElementById('beacon3').classList.remove('invisible');
        document.getElementById('marker4').classList.add('visible');
        document.getElementById('marker4').classList.remove('invisible');
        document.getElementById('beacon4').classList.add('visible');
        document.getElementById('beacon4').classList.remove('invisible');
        document.getElementById('marker5').classList.add('visible');
        document.getElementById('marker5').classList.remove('invisible');
        document.getElementById('beacon5').classList.add('visible');
        document.getElementById('beacon5').classList.remove('invisible');

    } else {
        document.getElementById('marker').classList.remove('visible');
        document.getElementById('marker').classList.add('invisible');
        document.getElementById('beacon').classList.remove('visible');
        document.getElementById('beacon').classList.add('invisible');
        document.getElementById('marker2').classList.remove('visible');
        document.getElementById('marker2').classList.add('invisible');
        document.getElementById('beacon2').classList.remove('visible');
        document.getElementById('beacon2').classList.add('invisible');
        document.getElementById('marker3').classList.remove('visible');
        document.getElementById('marker3').classList.add('invisible');
        document.getElementById('beacon3').classList.remove('visible');
        document.getElementById('beacon3').classList.add('invisible');
        document.getElementById('marker4').classList.remove('visible');
        document.getElementById('marker4').classList.add('invisible');
        document.getElementById('beacon4').classList.remove('visible');
        document.getElementById('beacon4').classList.add('invisible');
        document.getElementById('marker5').classList.remove('visible');
        document.getElementById('marker5').classList.add('invisible');
        document.getElementById('beacon5').classList.remove('visible');
        document.getElementById('beacon5').classList.add('invisible');

        document.body.style.overflowY = 'scroll';
    }
});
//video2

window.addEventListener('scroll', function () {
    var video = document.getElementById('v1');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 10000) {
        video.style.zIndex = '16'
        document.getElementById('v1').classList.add('slide-in');
        document.getElementById('v1').classList.remove('slide-off');
    }
    if (scrollPosition < 9800) {
        video.style.zIndex = '0';
    }
    if (scrollPosition < 10000) {
        document.getElementById('v1').classList.add('slide-off');
        document.getElementById('v1').classList.remove('slide-in');
    }
});

window.addEventListener('scroll', function () {
    var conclusion = document.getElementById('concl-section');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 32000) {
        conclusion.style.zIndex = '100'
        document.getElementById('concl-section').classList.add('up');
        document.getElementById('concl-section').classList.remove('down');
    }
    if (scrollPosition < 31000) {
        conclusion.style.zIndex = '0';
    }
    if (scrollPosition < 32000) {
        document.getElementById('concl-section').classList.add('down');
        document.getElementById('concl-section').classList.remove('up');
    }
});
//épingles apparition

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 20000 && scrollPosition <= 24200) {
        document.getElementById('marker20').classList.add('visible');
        document.getElementById('marker20').classList.remove('invisible');
        document.getElementById('beacon20').classList.add('visible');
        document.getElementById('beacon20').classList.remove('invisible');
        document.getElementById('marker21').classList.add('visible');
        document.getElementById('marker21').classList.remove('invisible');
        document.getElementById('beacon21').classList.add('visible');
        document.getElementById('beacon21').classList.remove('invisible');
        document.getElementById('marker22').classList.add('visible');
        document.getElementById('marker22').classList.remove('invisible');
        document.getElementById('beacon22').classList.add('visible');
        document.getElementById('beacon22').classList.remove('invisible');
        document.getElementById('marker23').classList.add('visible');
        document.getElementById('marker23').classList.remove('invisible');
        document.getElementById('beacon23').classList.add('visible');
        document.getElementById('beacon23').classList.remove('invisible');
    }
    else{
        document.getElementById('marker20').classList.add('invisible');
        document.getElementById('marker20').classList.remove('visible');
        document.getElementById('beacon20').classList.add('invisible');
        document.getElementById('beacon20').classList.remove('visible');
        document.getElementById('marker21').classList.add('invisible');
        document.getElementById('marker21').classList.remove('visible');
        document.getElementById('beacon21').classList.add('invisible');
        document.getElementById('beacon21').classList.remove('visible');
        document.getElementById('marker22').classList.add('invisible');
        document.getElementById('marker22').classList.remove('visible');
        document.getElementById('beacon22').classList.add('invisible');
        document.getElementById('beacon22').classList.remove('visible');
        document.getElementById('marker23').classList.add('invisible');
        document.getElementById('marker23').classList.remove('visible');
        document.getElementById('beacon23').classList.add('invisible');
        document.getElementById('beacon23').classList.remove('visible');
    }
});

//clic épingles = ouverture menu//
function toggleMenu() {
    const menuBtn = document.querySelector('#marker');
    const menuBtn2 = document.querySelector('#marker2');
    const menuBtn3 = document.querySelector('#marker3');
    const menuBtn4 = document.querySelector('#marker4');
    const menuBtn5 = document.querySelector('#marker5');
    const menu = document.querySelector('#menu');
    const menu2 = document.querySelector('#menu2');
    const menu3 = document.querySelector('#menu3');
    const menu4 = document.querySelector('#menu4');
    const menu5 = document.querySelector('#menu5');
    const beacon = document.querySelector('#beacon');
    const beacon2 = document.querySelector('#beacon2');
    const beacon3 = document.querySelector('#beacon3');
    const beacon4 = document.querySelector('#beacon4');
    const beacon5 = document.querySelector('#beacon5');
    const menuBtn20 = document.querySelector('#marker20');
    const menuBtn21 = document.querySelector('#marker21');
    const menuBtn22 = document.querySelector('#marker22');
    const menuBtn23 = document.querySelector('#marker23');
    const menu20 = document.querySelector('#menu20');
    const menu21 = document.querySelector('#menu21');
    const menu22 = document.querySelector('#menu22');
    const menu23 = document.querySelector('#menu23');
    const beacon20 = document.querySelector('#beacon20');
    const beacon21 = document.querySelector('#beacon21');
    const beacon22 = document.querySelector('#beacon22');
    const beacon23 = document.querySelector('#beacon23');

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
    document.addEventListener('click', (e) => {
        if (!menu2.contains(e.target) && !menuBtn2.contains(e.target)) {
            menu2.classList.remove('show');
        }
    });
    document.addEventListener('click', (e) => {
        if (!menu3.contains(e.target) && !menuBtn3.contains(e.target)) {
            menu3.classList.remove('show');
        }
    });
    document.addEventListener('click', (e) => {
        if (!menu4.contains(e.target) && !menuBtn4.contains(e.target)) {
            menu4.classList.remove('show');
        }
    });
    document.addEventListener('click', (e) => {
        if (!menu5.contains(e.target) && !menuBtn5.contains(e.target)) {
            menu5.classList.remove('show');
        }
    });
    document.addEventListener('click', (e) => {
        if (!menu20.contains(e.target) && !menuBtn20.contains(e.target)) {
            menu20.classList.remove('show');
        }
    });
    document.addEventListener('click', (e) => {
        if (!menu21.contains(e.target) && !menuBtn21.contains(e.target)) {
            menu21.classList.remove('show');
        }
    });
    document.addEventListener('click', (e) => {
        if (!menu22.contains(e.target) && !menuBtn22.contains(e.target)) {
            menu22.classList.remove('show');
        }
    });
    document.addEventListener('click', (e) => {
        if (!menu23.contains(e.target) && !menuBtn23.contains(e.target)) {
            menu23.classList.remove('show');
        }
    });

    menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('show');
        menuBtn.style.backgroundColor = 'green';
        beacon.classList.add('green');
    });
    menuBtn2.addEventListener('click', (e) => {
        menu2.classList.toggle('show');
        menuBtn2.style.backgroundColor = 'green';
        beacon2.classList.add('green');
    });
    menuBtn3.addEventListener('click', (e) => {
        menu3.classList.toggle('show');
        menuBtn3.style.backgroundColor = 'green';
        beacon3.classList.add('green');
    });
    menuBtn4.addEventListener('click', (e) => {
        menu4.classList.toggle('show');
        menuBtn4.style.backgroundColor = 'green';
        beacon4.classList.add('green');
    });
    menuBtn5.addEventListener('click', (e) => {
        menu5.classList.toggle('show');
        menuBtn5.style.backgroundColor = 'green';
        beacon5.classList.add('green');
    });
    menuBtn20.addEventListener('click', (e) => {
        menu20.classList.toggle('show');
        menuBtn20.style.backgroundColor = 'green';
        beacon20.classList.add('green');
    });
    menuBtn21.addEventListener('click', (e) => {
        menu21.classList.toggle('show');
        menuBtn21.style.backgroundColor = 'green';
        beacon21.classList.add('green');
    });
    menuBtn22.addEventListener('click', (e) => {
        menu22.classList.toggle('show');
        menuBtn22.style.backgroundColor = 'green';
        beacon22.classList.add('green');
    });
    menuBtn23.addEventListener('click', (e) => {
        menu23.classList.toggle('show');
        menuBtn23.style.backgroundColor = 'green';
        beacon23.classList.add('green');
    });
}
toggleMenu();


//hero section
const introSection = document.querySelector('.intro-section');
const enterBtn = document.getElementById('enter-btn');
const closeBtn = document.getElementById('closepopup');
const body = document.querySelector('body');

enterBtn.addEventListener('click', function () {
    introSection.style.display = 'none';
    body.style.overflow = 'visible';
    document.getElementById("popup").style.display = "block";
});
closeBtn.addEventListener('click', function () {
    document.getElementById("popup").style.display = "none";
});

body.style.overflow = 'hidden';
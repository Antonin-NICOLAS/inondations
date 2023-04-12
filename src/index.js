//video animation

let position = 0;
const vitesse = 1200;
const video = document.querySelector("video");

window.requestAnimationFrame(avanceVideo);

function avanceVideo() {
    position = window.pageYOffset / vitesse;
    if (video.readyState >= 3) {
        video.currentTime = position;
    }
    window.requestAnimationFrame(avanceVideo);
}

//épingles apparition

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 8500) {
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

        // Toujours bloquer le scroll si on n'est pas sur les épingles
        document.body.style.overflowY = 'scroll';
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

    menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('show');
        menuBtn.style.backgroundColor = 'green';
    });
    menuBtn2.addEventListener('click', (e) => {
        menu2.classList.toggle('show');
        menuBtn2.style.backgroundColor = 'green';
    });
    menuBtn3.addEventListener('click', (e) => {
        menu3.classList.toggle('show');
        menuBtn3.style.backgroundColor = 'green';
    });
    menuBtn4.addEventListener('click', (e) => {
        menu4.classList.toggle('show');
        menuBtn4.style.backgroundColor = 'green';
    });
    menuBtn5.addEventListener('click', (e) => {
        menu5.classList.toggle('show');
        menuBtn5.style.backgroundColor = 'green';
    });
}
toggleMenu();


//hero section
const introSection = document.querySelector('.intro-section');
const enterBtn = document.getElementById('enter-btn');

enterBtn.addEventListener('click', function() {
  introSection.style.display = 'none';
});
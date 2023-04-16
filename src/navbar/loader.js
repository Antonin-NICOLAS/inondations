// Dès que la page est chargée, exécuter la fonction loader
window.addEventListener('load', loader);

function loader() {
  // On cible les éléments dont on a besoin
  const water = document.getElementById('water');
  const count = document.getElementById('count');
  const percentNum = document.querySelector('.percentNum');
  const loader = document.querySelector('.loader');

  // On définit le pourcentage de remplissage de l'animation
  let percent = 0;

  // On crée un intervalle qui met à jour la progression du chargement toutes les 50ms
  let interval = setInterval(() => {
    percent += 1;
    count.innerHTML = percent;
    water.style.transform = `translate(0, ${100 - percent}%)`;
    if (percent >= 100) {
      clearInterval(interval);
      // On retire la classe 'loader' après au moins 4 secondes
      setTimeout(() => {
        loader.classList.remove('loader');
        loader.classList.add('invisible');
      });
    }
  }, 50);
}

window.onscroll = function onScroll() {
  let pixelsFromTop = window.scrollY;

  let documentHeight = document.body.clientHeight;

  let windowHeight = window.innerHeight;

  let difference = documentHeight - windowHeight;

  let percentage = (pixelsFromTop * 100) / difference;

  document.querySelector(".progress-bar").style.top = `${100 - percentage}%`;
};
/* =========================================
   TOGGLE DE INFORMAÇÕES DOS PLANOS
========================================= */

function toggleInfo(button) {
  const card = button.closest('.card');
  const info = card.querySelector('.info');

  // Fecha todas as outras infos
  document.querySelectorAll('.info').forEach(item => {
    if (item !== info) {
      item.classList.remove('show');
    }
  });

  // Abre ou fecha a info clicada
  info.classList.toggle('show');
}

/* =========================================
   SCROLL SUAVE PARA ÂNCORAS
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

/* =========================================
   ANIMAÇÃO DE ENTRADA DOS CARDS
========================================= */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  { threshold: 0.2 }
);

// Estado inicial dos cards
document.querySelectorAll('.card').forEach(card => {
  card.classList.remove('show');
  observer.observe(card);
});

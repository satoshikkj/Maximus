function toggleInfo(button) {
  const info = button.nextElementSibling;

  // Fecha outros cards abertos
  document.querySelectorAll('.info').forEach(item => {
    if (item !== info) {
      item.style.display = 'none';
      item.previousElementSibling.textContent = 'Informações';
    }
  });

  // Alterna o card clicado
  if (info.style.display === 'block') {
    info.style.display = 'none';
    button.textContent = 'Informações';
  } else {
    info.style.display = 'block';
    button.textContent = 'Ocultar';
  }
}

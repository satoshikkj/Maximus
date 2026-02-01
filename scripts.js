function toggleDetalhes(button) {
  const plano = button.closest(".plano");
  const detalhes = plano.querySelector(".detalhes");

  if (detalhes.style.display === "block") {
    detalhes.style.display = "none";
    button.textContent = "Ver Detalhes";
  } else {
    detalhes.style.display = "block";
    button.textContent = "Ocultar Detalhes";
  }
}

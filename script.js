document.querySelectorAll('.card-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o redirecionamento imediato

    const card = this.querySelector('.card');
    const nomeAnimal = card.dataset.animal;
    const nomeCodificado = encodeURIComponent(nomeAnimal);

    const formBase = "https://docs.google.com/forms/d/e/1FAIpQLSdZAd1-WVz0KmbLYkG6T30KfebHjGmHTyOZJqGh6zYcQrvdEw/viewform?usp=pp_url&entry.1302158154=";
    const urlFinal = formBase + nomeCodificado;

    window.open(urlFinal, "_blank"); // Abre em nova aba
  });
});

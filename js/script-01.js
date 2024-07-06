onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

function handleOption(isCorrect) {
  if (isCorrect) {
    // Obtém o número da página atual a partir da URL //
    const currentUrl = window.location.href;
    const match = currentUrl.match(/pergunta(\d+)\.html/);

    if (match) {
      const currentPage = parseInt(match[1]);
      const nextPage = currentPage + 1;

      // Inicia a transição //
      document.body.classList.add('fade-out');

      // Espera a transição completar antes de redirecionar
      setTimeout(() => {
        if (currentPage >= 10) {
          window.location.href = 'final.html';
        } else {
          window.location.href = `pergunta${nextPage}.html`;
        }
      }, 1000); // Espera 1 segundo para corresponder ao tempo da transição do CSS //
    } else {
      // Se não estiver em uma página de pergunta, vai para a primeira página de pergunta //
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'pergunta1.html';
      }, 1000);
    }
  } else {
    alert('Errado, né, amor! Tente de novo, agora você acerta ;)');
    window.location.reload();
  }
}
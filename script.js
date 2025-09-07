// Envio do formulário com EmailJS
document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault();

  console.log("Enviando formulário...");

  emailjs.sendForm("service_sfpurhc", "template_vp15kss", this)
    .then(() => {
      console.log("Mensagem enviada com sucesso!");
      window.location.href = "obrigado.html";
    }, (error) => {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar mensagem. Veja o console para detalhes.");
    });
});

// Atualizar o ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

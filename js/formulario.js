const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;' ><span style='color: #317A00' >Mensagem enviada</span>, em breve entraremos em contato</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;' ><span style='color: #E00000;' >Mensagem não enviada</span>, em breve entraremos em contato</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  /** prevene de abrir a outra pagina  */
  const botao = document.querySelector("form button");
  botao.disable = true;
  /** botao só funcionara uma vez */
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);
  /** classe que pega todos os dados preenchidos no formulario */

  fetch("./enviar.php", {
    method: "post",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);

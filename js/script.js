/** MENU */

const links = document.querySelectorAll(".header-menu a");

function ativar(link) {
  const href = link.href;
  const url = location.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativar);

/** Ativar itens do orçamento   if(elemento){
    elemento.checked = true;
  }*/

const parametros = new URLSearchParams(location.search);

/** o new URLSearchParams busca os parametros da atual localização da url, nesse caso seria tipo=parametro1 e produto=parametro2  */

function ativarProduto(parametro) {
  /** aqui o (parametro) acima faz a ponte com o forEach e transforma os dados recebidos em array */
  const elemento = document.getElementById(parametro);
  /** criamos entao uma variavel (elemento) que recebe o elemento completo do parametro acima na pagina orcamento 
   Dessa forma <input type="radio" name="tipo" value="seguro" id="seguro">
  */
  if (elemento) {
    /** if verifica se o elemento existe corretamente  */
    elemento.checked = true;
    /** agora esse método inclui o checked no input acima */
  }
}

parametros.forEach(ativarProduto);

/** Perguntas frequentes da pag seguros*/

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  /** o const pergunta terá exatamente qual item esta clicando */
  const controls = pergunta.getAttribute("aria-controls");
  /** o const controles pegara nome o atributo aria-controls do item clicado */
  const resposta = document.getElementById(controls);
  /** o const resposta pegara o elemento que tenha o ID que o constrols puxou */
  resposta.classList.toggle("ativa");
  /** com isso adicionara a classe ativa na resposta */
  const ativa = resposta.classList.contains("ativa");
  /** a const ativa verifica se esta contendo a classe ativa, se sim = true */
  const teste = pergunta.setAttribute("aria-expanded", ativa);
  /** entao agora é alterado no aria-expanded de false para true   */
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click",ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

/** Galeria de imagens */

const imagens = document.querySelectorAll(".bicicleta-imagens img");

const galeria = document.querySelector(".bicicleta-imagens");

function galeriaFuncao(imagem) {
  const foto = imagem.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    /** o metodo matchMedia retorna um true ou false do tamanho atual da tela conforme a regra aplicada entre (), nesse caso se a tela for maior que 1000 vai retornar true e entao o if executará o metodo prepend */
    galeria.prepend(foto);
    /** o método prepend faz com o que o item clicado fique na 1* posição dentro da galeria */
  }
}

function trocarImagem (img) {
  img.addEventListener("click", galeriaFuncao);
}

imagens.forEach(trocarImagem);


/** Animador de imagens através do plugin da Origamid */

// if verifica se ele esta na tela atual
if(window.SimpleAnime){
new SimpleAnime();
}



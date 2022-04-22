class editaTexto {
  constructor() {
    this.caixaTitulo = document.querySelector('.titulo');
    this.caixaTexto = document.querySelector('.texto');
    this.caixaData = document.querySelector('.data');
    
    this.escreveTexto = document.querySelector('.escreve-texto');
    this.galeria = document.querySelector('#galeria');
    this.estiloTexto = document.querySelector('.estilo-texto'); 
    
    this.tituloFinal = document.createElement ('h1');
    this.tituloFinal.classList.add('titulo-geral');
    this.textoFinal = document.createElement('p');
    this.textoFinal.classList.add('texto-geral');
    this.dataFinal = document.createElement('span'); 
    this.dataFinal.classList.add('data-geral');
    this.corpoFinal = document.createElement('section');
    this.corpoFinal.classList.add('estilo-geral');
    
    this.corpoTexto = this.corpoTexto.bind(this);
    this.changeEstilo = this.changeEstilo.bind(this);
  }


  corpoTexto() {
    this.titulo = this.caixaTitulo.value;
    this.texto = this.caixaTexto.value;
    this.data = this.caixaData.value.split('-').reverse().join('\/');

    this.saveValues();
    if (this.titulo && this.texto && this.data) {
      this.tituloFinal.innerHTML = this.titulo;
      this.textoFinal.innerText = this.texto;
      this.dataFinal.innerHTML = this.data;

      this.galeria.append(this.corpoFinal);
      this.corpoFinal.appendChild(this.tituloFinal);
      this.corpoFinal.appendChild(this.dataFinal);
      this.corpoFinal.appendChild(this.textoFinal);
    }
  }
  insereTexto() {
    this.escreveTexto.addEventListener('change', this.corpoTexto)
  }
  saveValues() {
   localStorage.setItem('titulo', this.titulo);
   localStorage.setItem('texto', this.texto);
   localStorage.setItem('data', this.data);
  } 
  
  setValues() {
    this.caixaTitulo.value = localStorage.getItem('titulo', this.titulo);
    this.caixaTexto.value = localStorage.getItem('texto', this.texto);
    this.caixaData.value = localStorage.getItem('data', this.data);

    this.tituloFinal.innerHTML = localStorage.getItem('titulo', this.titulo);
    this.textoFinal.innerText = localStorage.getItem('texto', this.texto);
    this.dataFinal.innerHTML = localStorage.getItem('data', this.data);

    this.galeria.append(this.corpoFinal);
    this.corpoFinal.appendChild(this.tituloFinal);
    this.corpoFinal.appendChild(this.dataFinal);
    this.corpoFinal.appendChild(this.textoFinal);
  }

 changeEstilo() {
   this.fonteTitulo = this.caixaFonteTitulo.value;
  this.corTitulo = this.caixaCorTitulo.value;
  this.tamanhoTitulo = this.caixaTamanhoTitulo.value;

  this.fonteTexto = this.caixaFonteTexto.value;
  this.corTexto = this.caixaCorTexto.value;
  this.tamanhoTexto = this.caixaTamanhoTexto.value;

  this.tituloFinal.style.fontFamily = this.fonteTitulo;
  this.tituloFinal.style.color = this.corTitulo;
  this.tituloFinal.style.fontSize = this.tamanhoTitulo + 'px';

  this.textoFinal.style.fontFamily = this.fonteTexto;
  this.textoFinal.style.color = this.corTexto;
  this.textoFinal.style.fontSize = this.tamanhoTexto + 'px';
  } 

  estiloFontes() {
    this.controles = document.querySelector('.controles'); 

    this.caixaFonteTitulo = document.querySelector('#fonteTitulo');
    this.caixaCorTitulo = document.querySelector('#colorTitulo');
    this.caixaTamanhoTitulo = document.querySelector('#tamanhoTitulo');

    this.caixaFonteTexto = document.querySelector('#fonteTexto');
    this.caixaCorTexto = document.querySelector('#colorTexto');
    this.caixaTamanhoTexto = document.querySelector('#tamanhoTexto');

    this.controles.addEventListener('change', this.changeEstilo);
  }

  init() {
    this.setValues();
    this.insereTexto();  
    this.estiloFontes(); 
    return this;
  }
}

const Edita = new editaTexto();
Edita.init();

// fotos
const CLIENT_ID = '39bc75817755ef6';
const galeria = document.getElementById('galeria');
const getFotos = document.getElementById('get-fotos');

function doUpload(url, options) {
    function promisseCallback(resolve, reject) {
      function getFetchJson(response) {
        if(!response.ok) return reject(response);
        return response.json().then(resolve);
      }
      fetch(url, options)
      .then(getFetchJson)
      .catch(reject);
    };
    return new Promise(promisseCallback);
  };

  function addImage(url) {
    galeria.innerHTML += `<img src="${url}" width ="200" />`; 
  }

  function onSuccess(result) {
    const { data: { link } } = result;
    addImage(link);
  };

  function uploadImage(event) {
    event.preventDefault();

    const file = document.getElementById('file');
    const data = new FormData();
    data.append('image', file.files[0]);

    doUpload('https://api.imgur.com/3/image', {
      method: 'POST',
      body: data, 
      headers: {
        'Authorization': `Client-ID ${CLIENT_ID}`,
      }
    })
    .then(onSuccess)
    .then(console.error);
  }

  getFotos.addEventListener('submit', uploadImage);
  




class editaTexto {
  constructor() {
    this.caixaTitulo = document.querySelector('.titulo');
    this.caixaTexto = document.querySelector('.texto');
    this.caixaData = document.querySelector('.data');
    
    this.escreveTexto = document.querySelector('.escreve-texto');
    this.personaliza = document.querySelector('.personaliza');
    this.estiloTexto = document.querySelector('.estilo-texto'); 
    
    this.textoFinal = document.createElement('div');

    this.corpoTexto = this.corpoTexto.bind(this);
  }

  corpoTexto() {
    this.titulo = this.caixaTitulo.value;
    this.texto = this.caixaTexto.value;
    this.data = this.caixaData.value;
    if (this.titulo && this.texto && this.data) {
      this.textoFinal.innerHTML = this.titulo + ' ' + this.data + '</br>' + this.texto;  
      this.personaliza.append(this.textoFinal);
    }
  }
  insereTexto() {
    this.escreveTexto.addEventListener('change', this.corpoTexto)
  }

  init() {
    this.insereTexto();    
    return this;
  }
}

const Edita = new editaTexto();
Edita.init();












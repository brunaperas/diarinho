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
    this.saveValues()
    if (this.titulo && this.texto && this.data) {
      this.textoFinal.innerHTML = this.titulo + ' ' + this.data + '</br>' + this.texto;  
      this.personaliza.append(this.textoFinal);
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
  }
  init() {
    this.setValues();
    this.insereTexto();   
    return this;
  }
}

const Edita = new editaTexto();
Edita.init();












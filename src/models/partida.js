class Partida {
    constructor({ id, timevencedor, timeperdedor, mvp }) {
      this.id = id ? id : -1;
      this.timevencedor = timevencedor ? timevencedor : {};
      this.timeperdedor = timeperdedor ? timeperdedor : {};
      this.mvp = mvp;
    }
  }
  
  module.exports = Partida

const Partidas = require("../mensagem");


let  = [
    new Partida({ id: 1, timevencedor: [1,2,3], timeperdedor: [5,6,10], mvp: [1]}),
    new Partida({ id: 2, timevencedor: [5,9,14], timeperdedor: [1,8,10], mvp: [6]}),
    new Partida({ id: 3, timevencedor: [4,12,1], timeperdedor: [3,13,2], mvp: [4]}),
    new Partida({ id: 4, timevencedor: [5,2,7], timeperdedor: [7,4,9], mvp: [5]}),
    new Partida({ id: 5, timevencedor: [12,17,3], timeperdedor: [11,16,4], mvp: [12]}),
    new Partida({ id: 6, timevencedor: [19,1,20], timeperdedor: [20,2,19], mvp: [19]}),
    new Partida({ id: 7, timevencedor: [3,20,3], timeperdedor: [4,18,7], mvp: [3]}),
    new Partida({ id: 8, timevencedor: [4,19,6], timeperdedor: [5,18,4], mvp: [19]}),
    new Partida({ id: 9, timevencedor: [5,18,7], timeperdedor: [6,15,16], mvp: [18]}),
    new Partida({ id: 10, timevencedor: [6,17,12], timeperdedor: [5,7,17], mvp: [6]}),
    new Partida({ id: 11, timevencedor: [7,16,13], timeperdedor: [5,12,18], mvp: [7]}),
    new Partida({ id: 12, timevencedor: [8,15,3], timeperdedor: [1,2,19], mvp: [15]}),
    new Partida({ id: 13, timevencedor: [9,14,5], timeperdedor: [10,11,20], mvp: [9]}),
    new Partida({ id: 14, timevencedor: [13,2,11], timeperdedor: [12,9,1], mvp: [2]}),
    new Partida({ id: 15, timevencedor: [15,4,3], timeperdedor: [14,13,2], mvp: [3]}),
    new Partida({ id: 16, timevencedor: [16,6,9], timeperdedor: [15,5,3], mvp: [16]}),
    new Partida({ id: 17, timevencedor: [19,7,11], timeperdedor: [18,6,5], mvp: [19]}),
    new Partida({ id: 18, timevencedor: [20,11,12], timeperdedor: [5,6,6], mvp: [12]}),
    new Partida({ id: 19, timevencedor: [1,20,13], timeperdedor: [5,6,7], mvp: [1]}),
    new Partida({ id: 20, timevencedor: [2,6,4], timeperdedor: [5,6,8], mvp: [2]}),
]

class PartidasDAO {
    // Retorna a lista de Partidas
    listar() {
      return partidas;
    }
  
    // Retorna uma partida filtrada pela sua ID
    buscarPorId(id) {
      return partidas.find(partidas => partidas.id === id);
    }
  
    // Verifica existe uma instância de mensagem com aquele id
    exist(id) {
      return this.buscarPorId(id) ? true : false;
    }
  
    // Cria e armazena uma nova partida
    criar(partida) {
      partida.id = partidas[partidas.length - 1].id + 1;
      partidas.push(partidas);
      return parseInt(partida.id);
    }
  
    // Atualiza uma partida
    atualizar(id, partidaAtualizado) {
      const index = partidas.findIndex(partida => partidas.id === id);
      if (index !== -1) {
        partidas[index] = partidaAtualizado;
      }
    }
  
    // Deleta uma partida
    deletar(id) {
      const index = partidas.findIndex(partida => partida.id === id);
      if (index !== -1) {
        partidas.splice(index, 1);
      }
    }
  }

  module.exports = new PartidasDAO();

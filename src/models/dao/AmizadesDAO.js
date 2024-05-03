const Amizade = require("../amizade");

let amizades = [
    new Conquista({ id: 1, amigos:[1, 20] }),
  new Conquista({ id: 2, amigos:[2, 19] }),
  new Conquista({ id: 3, amigos:[3, 18] }),
  new Conquista({ id: 4, amigos:[4, 17] }),
  new Conquista({ id: 5, amigos:[5, 16] }),
  new Conquista({ id: 6, amigos:[6, 15] }),
  new Conquista({ id: 7, amigos:[7, 14] }),
  new Conquista({ id: 8, amigos:[8, 13] }),
  new Conquista({ id: 9, amigos:[9, 12] }),
  new Conquista({ id: 10, amigos:[10, 11] }),
  new Conquista({ id: 11, amigos:[11, 10] }),
  new Conquista({ id: 12, amigos:[12, 9] }),
  new Conquista({ id: 13, amigos:[13, 8] }),
  new Conquista({ id: 14, amigos:[14, 7] }),
  new Conquista({ id: 15, amigos:[15, 6] }),
  new Conquista({ id: 16, amigos:[16, 5] }),
  new Conquista({ id: 17, amigos:[17, 4] }),
  new Conquista({ id: 18, amigos:[18, 3] }),
  new Conquista({ id: 19, amigos:[19, 2] }),
  new Conquista({ id: 20, amigos:[20, 1] }),
]

class AmizadesDAO {
    // Retorna a lista de amizades
    listar() {
      return amizades;
    }
  
    // Retorna uma amizade filtrado pela sua ID
    buscarPorId(id) {
      return amizades.find(amizades => amizades.id === id);
    }
  
    // Verifica existe uma instância de amizade com aquele id
    exist(id) {
      return this.buscarPorId(id) ? true : false;
    }
  
    // Cria e armazena uma nova amizade
    criar(amizade) {
      amizade.id = amizades[amizades.length - 1].id + 1;
      amizades.push(amizade);
      return parseInt(amizade.id);
    }
  
    // Atualiza um conquista
    atualizar(id, amizadeAtualizado) {
      const index = amizades.findIndex(amizade => amizade.id === id);
      if (index !== -1) {
        amizades[index] = amizadeAtualizado;
      }
    }
  
    // Deleta uma amizade
    deletar(id) {
      const index = amizades.findIndex(amizade => amizade.id === id);
      if (index !== -1) {
        amizades.splice(index, 1);
      }
    }
  }
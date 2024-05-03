const Jogador = require("../jogador")

// Vetor de Jogadores
let jogadores = [
  // Altere aqui para os seus jogadores
  new Jogador({ id: 1, nome: "Dionathan L. de Vargas", nickName: "dion.vargas", classificacao: 0, estatisticas: 1, conquistas: [1, 2, 3] }),
  new Jogador({ id: 2, nome: "Frank G. Allen Vargas", nickName: "Kuxeru", classificacao: 0, estatisticas: 2, conquistas: [5] }),
  new Jogador({ id: 3, nome: "Lauri Astala", nickName: "Bikuir", classificacao: 0, estatisticas: 3, conquistas: [4, 9] }),
  new Jogador({ id: 4, nome: "Bianka Wismer", nickName: "Estuyr", classificacao: 0, estatisticas: 4, conquistas: [3, 5] }),
  new Jogador({ id: 5, nome: "Baruch Papapanagiotou", nickName: "Viapus", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 6, nome: "Diego Mendez", nickName: "Foguete", classificacao: 0, estatisticas: 6, conquistas: [2, 10] }),
  new Jogador({ id: 7, nome: "Ana Sofia Marques", nickName: "Furia", classificacao: 0, estatisticas: 7, conquistas: [3, 11] }),
  new Jogador({ id: 8, nome: "Marcus Oliveira", nickName: "Mago", classificacao: 0, estatisticas: 8, conquistas: [8, 6] }),
  new Jogador({ id: 9, nome: "Carla Rodrigues", nickName: "Canhão", classificacao: 0, estatisticas: 9, conquistas: [11, 12] }),
  new Jogador({ id: 10, nome: "Rafael Cruz", nickName: "Falcão", classificacao: 0, estatisticas: 10, conquistas: [13, 14] }),
  new Jogador({ id: 11, nome: "Sofia Garcia", nickName: "Raio", classificacao: 0, estatisticas: 11, conquistas: [15, 16] }),
  new Jogador({ id: 12, nome: "Bruno Santos", nickName: "Tanque", classificacao: 0, estatisticas: 12, conquistas: [7, 20] }),
  new Jogador({ id: 13, nome: "Juliana Costa", nickName: "Flecha", classificacao: 0, estatisticas: 13, conquistas: [20, 3] }),
  new Jogador({ id: 14, nome: "Ricardo Silva", nickName: "Lince", classificacao: 0, estatisticas: 14, conquistas: [6, 14] }),
  new Jogador({ id: 15, nome: "Maria Ferreira", nickName: "Fênix", classificacao: 0, estatisticas: 15, conquistas: [8, 17] }),
  new Jogador({ id: 16, nome: "Pedro Lima", nickName: "Relâmpago", classificacao: 0, estatisticas: 16, conquistas: [7, 3] }),
  new Jogador({ id: 17, nome: "Laura Oliveira", nickName: "Pantera", classificacao: 0, estatisticas: 17, conquistas: [8, 18] }),
  new Jogador({ id: 18, nome: "Gabriel Almeida", nickName: "Martelo", classificacao: 0, estatisticas: 18, conquistas: [19, 11] }),
  new Jogador({ id: 19, nome: "Isabela Costa", nickName: "Cruzeiro", classificacao: 0, estatisticas: 19, conquistas: [5, 13] }),
  new Jogador({ id: 20, nome: "Lucas Santos", nickName: "Trovão", classificacao: 0, estatisticas: 20, conquistas: [9, 7] })

];

class JogadoresDAO {
  // Retorna a lista de jogadores
  listar() {
    return jogadores;
  }

  // Retorna um jogador filtrado peloa sua ID
  buscarPorId(id) {
    return jogadores.find(jogador => jogador.id === id);
  }

  // Verifica existe uma instância de jogadores com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo jogador
  criar(jogador) {
    jogador.id = jogadores[jogadores.length - 1].id + 1;
    jogadores.push(jogador);
    return parseInt(jogador.id);
  }

  // Atualiza um jogador
  atualizar(id, jogadorAtualizado) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores[index] = jogadorAtualizado;
    }
  }

  // Deleta um jogador
  deletar(id) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores.splice(index, 1);
    }
  }
}

module.exports = new JogadoresDAO();

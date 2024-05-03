const Conquista = require("../conquista");

// Vetor de Conquistas
let conquistas = [
  // Altere aqui para as suas conquistas
  new Conquista({ id: 1, nome: "Qualquer meio", descricao: "Elimine 3 inimigos com um único uso da Aniquilação de Ramattra" }),
  new Conquista({ id: 2, nome: "Dor Incomparável", descricao: "Bloqueio 300 danifique e sobreviva em um único uso da Forma Nêmesis de Ramattra" }),
  new Conquista({ id: 3, nome: "Adrenaline Junkie", descricao: "Tenha 7 das feridas da Junker Queen ativas nos inimigos ao mesmo tempo em Jogo Rápido ou Competitivo" }),
  new Conquista({ id: 4, nome: "Coup De Gracie", descricao: "Use a lâmina irregular e carnificina de Junker Queen para puxar e matar um inimigo em Quick ou Compet Jogo ativo" }),
  new Conquista({ id: 5, nome: "On the Move", descricao: "Mate um inimigo com um tiro na cabeça do Railgun carregado enquanto desliza no Jogo Rápido ou Competitivo" }),
  new Conquista({ id: 6, nome: "Mestre da Floresta", descricao: "Desbloqueado ao completar todas as missões secundárias na Floresta Élfica." }),
  new Conquista({ id: 7, nome: "Senhor do Trovão", descricao: "Conquistado ao derrotar o chefe final com uma única habilidade de raio." }),
  new Conquista({ id: 8, nome: "Explorador Intrépido ", descricao: "Alcance todos os pontos de interesse em todos os mapas do jogo." }),
  new Conquista({ id: 9, nome: "Guardião do Tesouro", descricao: "Encontre e abra 100 baús escondidos espalhados pelo mundo do jogo." }),
  new Conquista({ id: 10, nome: "Mestre da Camuflagem", descricao: "Conquiste esta façanha ao passar despercebido por 10 guardas em uma única missão de infiltração." }),
  new Conquista({ id: 11, nome: "Aventureiro do Abismo", descricao: "Sobreviva a uma queda livre de 1000 metros e ainda complete a missão sem morrer." }),
  new Conquista({ id: 12, nome: "Colecionador de Relíquias", descricao: "Reúna todas as 50 relíquias perdidas em todo o mundo do jogo." }),
  new Conquista({ id: 13, nome: "Domador de Bestas", descricao: "Domestique e monte 5 criaturas únicas encontradas no jogo." }),
  new Conquista({ id: 14, nome: "Arqueólogo de Ruínas", descricao: "Explore e mapeie todas as ruínas antigas espalhadas pelo mundo." }),
  new Conquista({ id: 15, nome: "Mestre do Disfarce", descricao: "Engane 50 inimigos diferentes usando disfarces em missões de infiltracão." }),
  new Conquista({ id: 16, nome: "Ninja das Sombras", descricao: "Complete uma área inteira sem ser detectado uma única vez." }),
  new Conquista({ id: 17, nome: "Herói dos Fracos", descricao: "Complete 20 missões secundárias de resgate de civis em perigo." }),
  new Conquista({ id: 18, nome: "Exterminador de Chefes", descricao: "Derrote todos os chefes do jogo sem usar nenhum item de cura." }),
  new Conquista({ id: 19, nome: "Lutador Invicto", descricao: "Vença 50 combates consecutivos em arenas de batalha." }),
  new Conquista({ id: 20, nome: "Cavaleiro do Céu", descricao: "Alcance o topo da montanha mais alta do jogo e erga a bandeira da sua facção." }),

];

class ConquistasDAO {
  // Retorna a lista de conquistas
  listar() {
    return conquistas;
  }

  // Retorna um conquista filtrado pela sua ID
  buscarPorId(id) {
    return conquistas.find(conquista => conquista.id === id);
  }

  // Verifica existe uma instância de conquista com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo conquista
  criar(conquista) {
    conquista.id = conquistas[conquistas.length - 1].id + 1;
    conquistas.push(conquista);
    return parseInt(conquista.id);
  }

  // Atualiza um conquista
  atualizar(id, conquistaAtualizado) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas[index] = conquistaAtualizado;
    }
  }

  // Deleta um conquista
  deletar(id) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas.splice(index, 1);
    }
  }
}

module.exports = new ConquistasDAO();

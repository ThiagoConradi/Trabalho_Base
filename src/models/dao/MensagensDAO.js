const Mensagem = require("../mensagem");
let  = [
    new Mensagem({ id: 1, texto: "Olá bom dia", datahora: "10:30", id_destinatario: 1, id_remetente: 20}),
    new Mensagem({ id: 2, texto: "Você é ruim!", datahora: "22:30", id_destinatario: 2, id_remetente: 19}),
    new Mensagem({ id: 3, texto: "Olá boa tarde", datahora: "15:20", id_destinatario: 3, id_remetente: 18}),
    new Mensagem({ id: 4, texto: "Independentemente do resultado, sempre é divertido jogar com você! Vamos continuar nos divertindo juntos!", datahora: "12:30", id_destinatario: 4, id_remetente: 17}),
    new Mensagem({ id: 5, texto: "Achei um easter egg super legal no jogo. Você já viu?", datahora: "22:30", id_destinatario: 5, id_remetente: 16}),
    new Mensagem({ id: 6, texto: "Você gostaria de formar uma guilda/clã conosco? Acho que seríamos uma equipe imbatível.", datahora: "16:50", id_destinatario: 6, id_remetente: 15}),
    new Mensagem({ id: 7, texto: "Ei, que tal nos unirmos para completar aquela missão difícil?", datahora: "17:00", id_destinatario: 7, id_remetente: 14}),
    new Mensagem({ id: 8, texto: "A competição no jogo está ficando acirrada. Estou adorando!", datahora: "11:00", id_destinatario: 8, id_remetente: 13}),
    new Mensagem({ id: 9, texto: "Você viu o novo trailer do próximo jogo?", datahora: "09:00", id_destinatario: 9, id_remetente: 12}),
    new Mensagem({ id: 10, texto: "Estava pensando em fazer uma maratona de jogos neste fim de semana. Você gostaria de participar?", datahora: "08:00", id_destinatario: 10, id_remetente: 11}),
    new Mensagem({ id: 11, texto: "Você tem alguma dica para melhorar minha jogabilidade?", datahora: "10:30", id_destinatario: 15, id_remetente: 20}),
    new Mensagem({ id: 12, texto: "Ei, você já experimentou aquela nova DLC/expansão? Vale a pena?", datahora: "12:30", id_destinatario: 2, id_remetente: 13}),
    new Mensagem({ id: 13, texto: "Que tal uma partida amistosa para treinarmos juntos?", datahora: "10:00", id_destinatario: 8, id_remetente: 2}),
    new Mensagem({ id: 14, texto: "Estou organizando um evento especial no jogo.", datahora: "22:00", id_destinatario: 5, id_remetente: 4}),
    new Mensagem({ id: 15, texto: "Aquele nível/desafio foi realmente difícil, não foi?", datahora: "19:00", id_destinatario: 9, id_remetente: 19}),
    new Mensagem({ id: 16, texto: "Você viu as últimas atualizações do jogo? Parecem promissoras.", datahora: "17:00", id_destinatario: 14, id_remetente: 16}),
    new Mensagem({ id: 17, texto: "Estou montando um time para um torneio. Você gostaria de se juntar a nós?", datahora: "14:25", id_destinatario: 2, id_remetente: 1}),
    new Mensagem({ id: 18, texto: "Parabéns pela vitória na última partida! Foi uma jogada incrível.", datahora: "19:00", id_destinatario: 1, id_remetente: 3}),
    new Mensagem({ id: 19, texto: "Estou impressionado com suas habilidades no jogo.", datahora: "04:00", id_destinatario: 7, id_remetente: 15}),
    new Mensagem({ id: 20, texto: "Estou impressionado em como você é ruim.", datahora: "02:30", id_destinatario: 5, id_remetente: 18}),
]

class MensagensDAO {
    // Retorna a lista de amizades
    listar() {
      return mensagens;
    }
  
    // Retorna uma mensagem filtrado pela sua ID
    buscarPorId(id) {
      return mensagens.find(mensagens => mensagens.id === id);
    }
  
    // Verifica existe uma instância de mensagem com aquele id
    exist(id) {
      return this.buscarPorId(id) ? true : false;
    }
  
    // Cria e armazena uma nova mensagem
    criar(mensagem) {
      mensagem.id = mensagens[mensagens.length - 1].id + 1;
      mensagens.push(mensagens);
      return parseInt(mensagem.id);
    }
  
    // Atualiza uma mensagem
    atualizar(id, mensagemAtualizado) {
      const index = mensagens.findIndex(mensagem => mensagens.id === id);
      if (index !== -1) {
        mensagens[index] = mensagemAtualizado;
      }
    }
  
    // Deleta uma mensagem
    deletar(id) {
      const index = mensagens.findIndex(mensagem => mensagem.id === id);
      if (index !== -1) {
        mensagens.splice(index, 1);
      }
    }
  }
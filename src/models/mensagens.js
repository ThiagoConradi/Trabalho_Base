class Mensagem {
  constructor({ id, texto, datahora, id_destinatario, id_remetente }) {
    this.id = id ? id : -1;
    this.id_destinatario = id_destinatario ? id_destinatario : -1;
    this.id_remetente = id_remetente ? id_remetente : -1;
    this.texto = texto;
    this.datahora = datahora ? datahora : 0;
  }
}

module.exports = Mensagem
const Jogador = require("../models/jogador")
const JogadoresDAO = require('../models/dao/JogadoresDAO');
const EstatisticasDAO = require("../models/dao/EstatisticasDAO");

class JogadoresController {
  constructor(){
    this.listaClassificacao = this.listaClassificacao.bind(this);
  }

  // Cria um novo jogador (CREATE)
  create(req, res) {
    let nickName = req.body.nickName;
    let nome = req.body.nome;

    let jogador = new Jogador({ nickName, nome });
    let jogadorId = JogadoresDAO.criar(jogador);

    // Faz o response para o browser
    if (jogadorId)
      res.status(201).json({ jogador: JogadoresDAO.buscarPorId(jogadorId) })
    else
      res.status(500).json({ message: "Não foi possível criar um usuário" })
  }

  // Lista todos os jogadores (READ)
  list(req, res) {
    // Busca os parâmetros na URL
    let nomeSearch = req.query.nomeSearch;
    let nickSearch = req.query.nickSearch;

    // Copia o array de jogadores
    let listaJogadores = JogadoresDAO.listar().slice();

    // Filtra os resultados se houver alguma query
    if (nomeSearch) {
      listaJogadores = listaJogadores.filter(jogador => jogador.nome.toUpperCase().includes(nomeSearch.toUpperCase()));
    }
    if (nickSearch) {
      listaJogadores = listaJogadores.filter(jogador => jogador.nickName.toUpperCase().includes(nickSearch.toUpperCase()));
    }

    // Faz o response para o browser
    if (listaJogadores.length === 0)
      res.status(200).json({ message: "Nenhum jogador encontrado" })
    else {
      // Cria um novo array de jogadores com dados resumidos
      let listaJogadoresVerbose = listaJogadores.map(jogador => jogador.principal());
      res.status(200).json({ jogadores: listaJogadoresVerbose })
    }
  }

  // Mostra um jogador específico (READ)
  show(req, res) {
    let id = req.params.id;
    let jogador = JogadoresDAO.buscarPorId(parseInt(id));

    if (jogador) {
      // Retorna os dados do jogador de forma detalhada
      res.status(200).json({ jogador: jogador.verbose() });
    } else {
      res.status(404).json({ message: 'Jogador não encontrado' });
    }
  }

  // Atualiza os dados de um jogador (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let jogador = JogadoresDAO.buscarPorId(parseInt(id));
    if (jogador) {
      // Atualiza os dados do jogador com base na requisição
      if (req.body.nickName) jogador.nickName = req.body.nickName;
      if (req.body.nome) jogador.nome = req.body.nome;
      if (req.body.classificacao) jogador.classificacao = req.body.classificacao;
      if (req.body.estatisticas) jogador.estatisticas = req.body.estatisticas;
      if (req.body.conquistas) jogador.conquistas = req.body.conquistas;

      // Atualiza o jogador na persistência
      JogadoresDAO.atualizar(id, jogador);
      
      // Retorna os dados atualizados do jogador
      res.status(200).json({ jogador: jogador.verbose() });
    } else {
      res.status(404).json({ message: 'Jogador não encontrado' });
    }
  }

  // Remove um jogador (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (JogadoresDAO.exist(id)) {
      JogadoresDAO.deletar(id);
      res.status(200).send();
    } else {
      res.status(404).json({ message: 'Jogador não encontrado' });
    }
  }

  // Calcula e lista a classificação dos 10 melhores jogadores
  listaClassificacao(req, res) {
    // Calcula a classificação dos jogadores
    this.calculaClassificacao();

    // Obtém todos os jogadores ordenados pela classificação
    let jogadoresOrdenados = JogadoresDAO.listar().sort((a, b) => b.classificacao - a.classificacao);

    // Seleciona os 10 primeiros jogadores
    let top10Jogadores = jogadoresOrdenados.slice(0, 10);

    // Formata os dados dos jogadores para a resposta
    let listaClassificacao = top10Jogadores.map(jogador => {
      return {
        id: jogador.id,
        nickName: jogador.nickName,
        classificacao: jogador.classificacao,
        pontuacao: jogador.estatisticas.pontuacao
      };
    });

    // Retorna a lista de classificação
    res.status(200).json({ classificacao: listaClassificacao });
  }

  // Atualiza a classificação dos jogadores pela pontuação das estatísticas
  calculaClassificacao() {
    let jogadores = JogadoresDAO.listar();
    jogadores.forEach(jogador => {
      let estatisticas = EstatisticasDAO.buscarPorId(jogador.id);
      if (estatisticas) {
        jogador.classificacao = estatisticas.pontuacao;
        JogadoresDAO.atualizar(jogador.id, jogador);
      }
    });
  }
}

module.exports = new JogadoresController();

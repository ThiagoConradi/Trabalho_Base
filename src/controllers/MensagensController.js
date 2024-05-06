const Mensagem = require("../models/mensagens")
const MensagensDAO = require('../models/dao/MensagensDAO');

class MensagensController {
    // Cria uma nova mensagem (CREATE)
    create(req, res) {
        let texto = req.body.texto;
        let datahora = req.body.datahora;
        let id_destinatario = req.body.id_destinatario;
        let id_remetente = req.body.id_remetente;

        let mensagem = new Mensagem({ texto });
        let mensagemId = MensagensDAO.criar(mensagem);

        // Faz o response para o browser
        if (mensagemId)
            res.status(201).json({ mensagem: MensagensDAO.buscarPorId(mensagemId) })
        else
            res.status(500).json({ message: "Não foi possível criar uma mensagem" })
    }

    // Lista todas as mensagens (READ)
    list(req, res) {
        // Copia o array conquistaes
        let listaMensagens = MensagensDAO.listar().slice()

        // Faz o response para o browser
        if (listaMensagens.length === 0)
            res.status(200).json({ message: "Nenhuma mensagem encontrada" })
        else
            res.status(200).json({ mensagens: listaMensagens })
    }

    // Mostrar uma mensagem (READ)
    show(req, res) {
        let id = req.params.id;
        let mensagem = MensagensDAO.buscarPorId(parseInt(id));

        // Faz o response para o browser
        if (mensagem) {
            res.status(200).json({ mensagem: mensagem });
        } else {
            res.status(404).json({ message: 'Mensagem não encontrada' });
        }
    }

    // Atualizar uma mensagem (UPDATE)
    update(req, res) {
        let id = req.params.id;
        let mensagem = MensagensDAO.buscarPorId(parseInt(id));
        if (mensagem) {
            if (req.body.mensagem) mensagem.texto = req.body.texto

            // Atualiza a mensagem na persistência
            MensagensDAO.atualizar(id, mensagem)
            // Faz o response para o browser
            res.status(200).json({ mensagem: mensagem });
        }
        else {
            // Faz o response para o browser
            res.status(404).json({ message: 'Mensagem não encontrada' });
        }
    }

    // Deleta uma conquista (DELETE)
    delete(req, res) {
        let id = parseInt(req.params.id);

        if (MensagensDAO.exist(id)) {
            MensagensDAO.deletar(id);

            // Faz o response para o browser
            res.status(200).send()
        }
        else {
            // Faz o response para o browser
            res.status(404).json({ message: 'Mensagem não encontrada' });
        }
    }
}

module.exports = new MensagensController();
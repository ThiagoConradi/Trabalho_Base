const Partida = require("../models/partida")
const PartidasDAO = require('../models/dao/PartidasDAO');
//id, timevencedor, timeperdedor, mvp
class PartidasController {
    // Cria uma nova partida (CREATE)
    create(req, res) {
        let timevencedor = req.body.timeVencedor;
        let timeperdedor = req.body.timePerdedor;
        let mvp = req.body.mvp;

        let partida = new Partida({ timeperdedor, timevencedor, mvp });
        let partidaId = PartidasDAO.criar(partida);

        // Faz o response para o browser
        if (partidaId)
            res.status(201).json({ partida: PartidasDAO.buscarPorId(partidaId) })
        else
            res.status(500).json({ message: "Não foi possível criar uma partida" })
    }

    // Lista todas as partidas (READ)
    list(req, res) {
        // Copia o array partidas
        let listaPartidas = PartidasDAO.listar().slice()

        // Faz o response para o browser
        if (listaPartidas.length === 0)
            res.status(200).json({ message: "Nenhuma partida encontrada" })
        else
            res.status(200).json({ partidas: listaPartidas })
    }

    // Mostrar uma partida (READ)
    show(req, res) {
        let id = req.params.id;
        let partida = PartidasDAO.buscarPorId(parseInt(id));

        // Faz o response para o browser
        if (partida) {
            res.status(200).json({ partida: partida });
        } else {
            res.status(404).json({ message: 'Partida não encontrada' });
        }
    }

    // Atualizar uma partida (UPDATE)
    update(req, res) {
        let id = req.params.id;
        let partida = PartidasDAO.buscarPorId(parseInt(id));
        if (partida) {
            if (req.body.timevencedor) partida.timevencedor = req.body.timevencedor
            if (req.body.timeperdedor) partida.timeperdedor = req.body.timeperdedor
            if (req.body.mvp) partida.mvp = req.body.mvp

            // Atualiza a partida na persistência
            PartidasDAO.atualizar(id, partida)
            // Faz o response para o browser
            res.status(200).json({ message: partida });
        }
        else {
            // Faz o response para o browser
            res.status(404).json({ message: 'Partida não encontrada' });
        }
    }



    // Deleta uma partida (DELETE)
    delete(req, res) {
        let id = parseInt(req.params.id);

        if (PartidasDAO.exist(id)) {
            PartidasDAO.deletar(id);

            // Faz o response para o browser
            res.status(200).send()
        }
        else {
            // Faz o response para o browser
            res.status(404).json({ message: 'Partida não encontrada' });
        }
    }
}

module.exports = new PartidasController();
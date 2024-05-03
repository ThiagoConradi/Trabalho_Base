const Amizade = require("../models/amizade")
const AmizadesDAO = require('../models/dao/AmizadesDAO');

class AmizadesController {
    // Cria uma nova conquista (CREATE)
    create(req, res) {
        let amigos = req.body.amigos;

        let amizade = new Amizade({ amigos });
        let amigoId = AmizadesDAO.criar(amizade);

        // Faz o response para o browser
        if (amigoId)
            res.status(201).json({ amizade: AmizadesDAO.buscarPorId(amigoId) })
        else
            res.status(500).json({ message: "Não foi possível criar uma amizade" })
    }

    // Lista todas as conquistas (READ)
    list(req, res) {
        // Copia o array conquistaes
        let listaAmizades = AmizadesDAO.listar().slice()

        // Faz o response para o browser
        if (listaAmizades.length === 0)
            res.status(200).json({ message: "Nenhuma amizade encontrada" })
        else
            res.status(200).json({ amizades: listaAmizades })
    }

    // Mostrar uma amizade (READ)
    show(req, res) {
        let id = req.params.id;
        let amizade = AmizadesDAO.buscarPorId(parseInt(id));

        // Faz o response para o browser
        if (amizade) {
            res.status(200).json({ amizade: amizade });
        } else {
            res.status(404).json({ message: 'Amizade não encontrada' });
        }
    }

    // Atualizar uma amizade (UPDATE)
    update(req, res) {
        let id = req.params.id;
        let amizade = AmizadesDAO.buscarPorId(parseInt(id));
        if (amizade) {
            if (req.body.nome) amizade.amigos = req.body.amigos

            // Atualiza a Amizade na persistência
            AmizadesDAO.atualizar(id, amizade)
            // Faz o response para o browser
            res.status(200).json({ amizade: amizade });
        }
        else {
            // Faz o response para o browser
            res.status(404).json({ message: 'Amizade não encontrada' });
        }
    }

    // Deleta uma conquista (DELETE)
    delete(req, res) {
        let id = parseInt(req.params.id);

        if (AmizadesDAO.exist(id)) {
            AmizadesDAO.deletar(id);

            // Faz o response para o browser
            res.status(200).send()
        }
        else {
            // Faz o response para o browser
            res.status(404).json({ message: 'Amizade não encontrada' });
        }
    }
}

module.exports = new AmizadesController();

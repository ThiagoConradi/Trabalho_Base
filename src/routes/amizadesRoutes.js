const express = require('express');
const router = express.Router();
const amizadesController = require('../controllers/AmizadesController');

// Rota para criar um novo amizade (CREATE)
router.post('/', amizadesController.create);

// Rota para listar todos os amizade (READ)
router.get('/', amizadesController.list);

// Rota para mostrar um amizade (READ)
router.get('/:id', amizadesController.show);

// Rota para atualizar um amizade (UPDATE)
router.put('/:id', amizadesController.update);

// Rota para deletar um amizade (DELETE)
router.delete('/:id', amizadesController.delete);

module.exports = router;
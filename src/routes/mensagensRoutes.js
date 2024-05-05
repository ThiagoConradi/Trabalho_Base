const express = require('express');
const router = express.Router();
const MensagensController = require('../controllers/MensagensController');

// Rota para criar uma nova mensagem (CREATE)
router.post('/', MensagensController.create);

// Rota para listar todas as mensagens (READ)
router.get('/', MensagensController.list);

// Rota para mostrar uma mensagem (READ)
router.get('/:id', MensagensController.show);

// Rota para atualizar uma mensagem (UPDATE)
router.put('/:id', MensagensController.update);

// Rota para deletar uma mensagem (DELETE)
router.delete('/:id', MensagensController.delete);

module.exports = router;
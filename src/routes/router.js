const { Router } = require("express");
const router = new Router();

// Importa e utiliza as rotas de jogadores
const jogadoresRoutes = require('./jogadoresRoutes');
router.use('/jogadores', jogadoresRoutes);

// Importa e utiliza as rotas de conquistas
const conquistasRoutes = require('./conquistasRoutes');
router.use('/conquistas', conquistasRoutes);

// Importa e utiliza as rotas de estatisticas
const estatisticasRoutes = require('./estatisticasRoutes');
router.use('/estatisticas', estatisticasRoutes);

// Importa e utiliza as rotas de mensagens
const mensagensRoutes = require('./mensagensRoutes');
router.use('/mensagens', mensagensRoutes);

// Importa e utiliza as rotas de partidas
const partidasRoutes = require('./partidasRoutes');
router.use('/partidas', partidasRoutes);

module.exports = router;

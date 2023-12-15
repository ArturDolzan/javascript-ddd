require('reflect-metadata');

module.exports = {
  ...require('./presentation/user/user'),
};

// const express = require('express');
// const container = require('./ioc/inversify.config');
// const TYPES = require('./ioc/types');

// const app = express();
// const port = 3000;

// app.use(express.json());

// // Injeção das dependencias
// const getConfigPresentation = container.get(TYPES.GetConfigPresentation);

// app.get('/user/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await getConfigPresentation.getUserById(id);
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).send('User not found');
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// // Outros endpoints podem ser adicionados aqui

// // Iniciar o servidor
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

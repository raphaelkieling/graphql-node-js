const app = require("./src/index");
const models = require("./src/models");

models.sequelize.sync({ force: true }).then(res => {
  console.log("Banco inicializado");

  app.listen(process.env.PORT || 3000, () => {
    console.log("Listening in port 3000");
  });
});

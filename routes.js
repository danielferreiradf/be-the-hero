const Router = require("express").Router;
const OngController = require("./controllers/OngController");

const routes = Router();

routes.post("/ongs", OngController.create);
routes.get("/ongs", OngController.getAll);

module.exports = routes;

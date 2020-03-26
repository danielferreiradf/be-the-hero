const Router = require("express").Router;

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");

const routes = Router();

// Ongs
routes.post("/ongs", OngController.create);
routes.get("/ongs", OngController.getAll);

// Incidents
routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.getAll);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;

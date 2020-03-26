const Router = require("express").Router;
const crypto = require("crypto");
const connection = require("./database/connection");

const routes = Router();

routes.post("/", async (req, res) => {
  try {
    const { name, email, whatsapp, city, uf } = req.body;

    // Generate ID
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = routes;

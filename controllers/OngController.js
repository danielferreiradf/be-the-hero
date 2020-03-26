const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
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
  },

  async getAll(req, res) {
    try {
      const ongs = await connection("ongs").select("*");

      res.json(ongs);
    } catch (error) {
      console.error(error.message);
    }
  }
};

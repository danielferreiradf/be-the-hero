const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    try {
      const { id } = req.body;

      const ong = await connection("ongs")
        .where("id", id)
        .select("name")
        .first();

      if (!ong) {
        return res.status(400).json({ error: "ONG not found with this ID" });
      }

      return res.json(ong);
    } catch (error) {
      console.error(error.message);
    }
  }
};

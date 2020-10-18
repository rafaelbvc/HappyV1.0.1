//const { catch } = require('./database/db');
const Database2 = require("./database/db2");
const saveFeedback = require("./database/saveFeedback");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  /*async orphanage(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM orphanages WHERE id = "${id}"`
      );
      const orphanage = results[0];

      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      if (orphanage.open_on_weekends == "0") {
        orphanage.open_on_weekends = false;
      } else {
        orphanage.open_on_weekends = true;
      }

      //como fazer um if ternario no js com esssa funcionalidade

      return res.render("orphanage", { orphanage });
    } catch (error) {
      return res.send("Erro no banco de dados!");
    }
  }, */

  async feedback(req, res) {
    const id = req.query.id;

    try {
      const db2 = await Database2;
      const results2 = await db2.all(
        `SELECT * FROM feedback WHERE id = "${id}"`
      );
      const feedback = results[0];

      //orphanage.images = orphanage.images.split(",");
     // orphanage.firstImage = orphanage.images[0];

      /*if (orphanage.open_on_weekends == "0") {
        orphanage.open_on_weekends = false;
      } else {
        orphanage.open_on_weekends = true;
      }*/

      //como fazer um if ternario no js com esssa funcionalidade

      return res.render("feeddback", { feedback });
    } catch (error) {
      return res.send("Erro no banco de dados!");
    }
  },

  async feedback(req, res) {
    try {
      const db2 = await Database2;
      const feedback = await db2.all("SELECT * FROM feedback");
      return res.render("feedback", { feedback });
    } catch (error) {
      console.log(error);
      return res.send("Error no banco de dados!");
    }
  },

  feedback(req, res) {
    return res.render("feedback");
  },

  async saveFeedback(req, res) {
    const fields = req.body;

    /* validar se todos os campos estão preenchidos
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    } */

    try {
      // salvar um orfanato
      const db2 = await Database2;
      await saveFeedback(db2, {
        yourname: fields.yourname,
        instname: fields.instname,
        whatsapp2: fields.whatsapp2,
        about2: fields.about2,
      });
      // redirecionamento
      return res.redirect("/feedback");
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
};

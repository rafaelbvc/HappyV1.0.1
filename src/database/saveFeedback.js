function saveFeedback(db2, feedback) {
    return db2.run(`
          INSERT INTO feedback (
              yourname,
              instname,
              whatsapp2,
              about2,
  
          ) VALUES (
              "${feedback.yourname}",
              "${feedback.instname}",
              "${feedback.whatsapp2}",
              "${feedback.about2}",
          );
      `);
  }
  
  module.exports = saveFeedback;
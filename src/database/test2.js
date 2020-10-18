const Database2 = require("./db2");
const saveFeedback = require("./saveFeedback");

Database2.then(async (db2) => {
  // inserir dados na tabela
  await saveFeedback(db2, {
    yourname: "Rafael Costa",
    instname: "São Cristovão",
    whatsapp2: "9898989666778",
    about2: "Melhor lugar para as crianças da região",
  });

  //consultar dados da tabela
  //const selectedFeedback = await db2.all("SELECT * FROM feedback");
  //console.log(selectedFeedback);

  // consultar somente um orfanato, pelo ID
  //const feedback = await db2.all('SELECT * FROM feedback WHERE id = "3"');
  //console.log(feedback);

  /* 
   // deletar dado da tabela
   console.log(await db2.run('DELETE FROM feedback WHERE id = "10"'))
   console.log(await db2.run('DELETE FROM feedback WHERE id = "11"'))
   */
});

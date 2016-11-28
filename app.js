/* globals require console*/
const config = require("./config");

// let data = require("./data")(config.connectionString["prod"]);
let data = require("./data")(config.connectionString["dev"]);
console.log(data);
const app = require("./config/application")({ data });

require("./routers")({ app, data });

app.listen(config.port, () => console.log(`Cooking Web App running at :${config.port}`));
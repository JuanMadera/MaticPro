const app = require("./bin/routes");
app.set("port", process.env.PORT ||3000)
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
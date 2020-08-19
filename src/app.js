import app from "./server";
import "./database/connection";

app.listen(5000, () => {
  console.log("Server up....");
});

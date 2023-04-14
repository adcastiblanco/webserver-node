import { config } from "dotenv";
import express from "express";
import * as url from "url";
import hbs from "hbs";
config();
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

const port = process.env.PORT;

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

const renderArgs = { name: "Angel", title: "Node JS Course" };

app.get("/", (req, res) => {
  res.render("home", renderArgs);
});

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/public/404.html");
// });

app.get("/generic", (req, res) => {
  res.render("generic", renderArgs);
});

app.get("/elements", (req, res) => {
  res.render("elements", renderArgs);
});

app.listen(port);

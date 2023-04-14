import { createServer } from "http";

createServer((req, res) => {
  //   res.writeHead(400);
  res.setHeader("Content-Disposition", "attachment; filename=list.csv");
  res.writeHead(200, { "Content-Type": "application/csv" });
  res.write("name, id\n");
  res.write("Angel, 1\n");
  res.write("Daivd, 2\n");
  res.end();
}).listen(8080);

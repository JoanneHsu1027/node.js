// console.log(process.env.DB_HOST);
// console.log(process.env.DB_USER);

import express from "express";
import multer from "multer";

const app = express();
const upload = multer({ dest: "tmp_uploads/" });

app.set("view engine", "ejs");

// 只會解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// 只會解析 application/json
app.use(express.json());


// routes
// 設定路由, 只允許用 GET 拜訪
app.get("/", (req, res) => {
  // res.send(`<h2>哈囉</h2>`);
  res.render("home", { name: "Shinder" });
});

app.get("/json-sales", (req, res) => {
  const sales = [
    {
      name: "Bill",
      age: 28,
      id: "A001",
    },
    {
      name: "Peter",
      age: 32,
      id: "A002",
    },
    {
      name: "Carl",
      age: 29,
      id: "A003",
    },
  ];
  res.render("json-sales", { sales });
});

app.get("/try-qs", (req, res) => {
  res.json(req.query); // 查看 query string
});

app.get("/try-post-form", (req, res) => {
  res.render("try-post-form");
});

app.post("/try-post-form", (req, res) => {
  res.render("try-post-form", req.body);
});

app.post("/try-post", (req, res) => {
  res.json(req.body);
});

app.post("/try-upload", upload.single("avatar"), (req, res) => {
  res.json({
    body: req.body,
    file: req.file,
  });
});

// ************
// 設定靜態內容資料夾
app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));


// ************ 404 要放在所有的路由設定之後
// use 接受所有 HTTP 方法
app.use((req, res) => {
  res.type("text/plain").status(404).send("走錯路了");
});

const port = process.env.WEB_PORT || 3002;
app.listen(port, () => {
  console.log(`Server start: port ${port}`);
});

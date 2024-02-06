const express = require("express");
const db = require("./config/database");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Halo ini halaman utama");
});

app.get("/nama/:nama", (req, res) => {
  const { nama } = req.params;
  const { umur } = req.query;

  if (umur) {
    return res.send(`Halo ${nama} kamu berumur ${umur} tahun`);
  } else {
    return res.send(`Halo ${nama}`);
  }
});

app.post("/user", upload.single("avatar"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "No file uploaded",
    });
  }

  const { fullname, email, password } = req.body;

  try {
    const post_data = await db.query(
      `INSERT INTO user(fullname, email, password, profile_picture) VALUES('${fullname}', '${email}', '${password}', '${req.file.filename}')`
    );
    return res.status(200).json({
      message: "User created",
      data: post_data,
    });
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
});

app.get("/users", async (req, res) => {
  try {
    const User = await db.query(
      `SELECT id, fullname, profile_picture FROM user`
    );
    return res.status(200).json({
      message: "Successfully getting Users",
      data: User,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan pada port ${port}`);
});

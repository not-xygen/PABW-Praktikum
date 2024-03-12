const express = require("express");
const cors = require("cors");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("./config/database");
const app = express();
const port = 3000;

dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Preserve the original filename
  },
});
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/nama/:nama", (req, res) => {
  const { nama } = req.params;
  const { umur } = req.query;

  if (umur) {
    res.send(`Nama saya ${nama} dan umur saya ${umur}`);
  } else {
    res.send(`Nama saya ${nama}`);
  }
});

app.get("/users", async (req, res) => {
  try {
    const DataUser = await db.query("SELECT * FROM user");
    return res.status(200).json({
      msg: "Data user berhasil di GET",
      data: DataUser,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Data user gagal di GET",
      err: error,
    });
  }
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const DataUser = await db.query(`SELECT * FROM user WHERE id = ${id}`);
    return res.status(200).json({
      msg: "Data user berhasil di GET",
      data: DataUser[0],
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Data user gagal di GET",
      err: error,
    });
  }
});

app.post("/daftar", async (req, res) => {
  const { fullname, email, password, umur, role } = req.body;
  try {
    const post_data =
      await db.query(`INSERT INTO user(fullname, email, password, umur, role) 
                                    VALUES ("${fullname}", "${email}", "${password}", "${umur}", "${role}")`);
    res.status(200).json({
      msg: "Berhasil membuat user",
      user: post_data,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Gagal membuat user",
      err: error,
    });
  }
});

app.post("/upload/:id_user", upload.single("avatar"), async (req, res) => {
  const { id_user } = req.params;
  try {
    const UploadFoto = db.query(
      `UPDATE user SET profile_picture = "${`./uploads/${req.file.filename}`}" WHERE id = ${id_user}`,
    );
    return res.status(200).json({
      msg: "Berhasil upload gambar",
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Gagal upload",
      err: error,
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await db.query(
      `SELECT id, fullname, profile_picture, umur, role FROM user WHERE email = '${email}' AND password = '${password}' `,
    );

    if (User.length === 1) {
      const login_log = await db.query(
        `INSERT INTO logs(pesan, waktu) VALUES ("User dengan ID ${
          User[0].id
        } telah login", "${new Date()
          .toISOString()
          .slice(0, 19)
          .replace("T", " ")}")`,
      );

      const token = jwt.sign(User[0], process.env.JWT_SECRET_KEY, {
        expiresIn: "3600s",
      });

      return res.json({
        msg: "Logged In",
        data: token,
      });
    }

    return res.json({
      msg: "User not Found",
    });
  } catch (error) {
    return res.json({
      msg: "Error occured when logging in",
    });
  }
});

app.post("/verifytoken", (req, res) => {
  const { token } = req.body;

  if (token) {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);

    return res.json({
      data: data,
    });
  }

  return res.json({
    msg: "Token invalid",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

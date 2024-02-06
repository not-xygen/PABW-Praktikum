import { useState } from "react";
import axios from "axios";

export function POSTUploadSection() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const formData = new FormData();
      formData.append("nama", nama);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", file);

      await axios.post("http://localhost:8080/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setNama("");
      setEmail("");
      setPassword("");
      setFile(null);
    } catch (error) {
      setError("Gagal mengirim data.");
    }
  };

  return (
    <div>
      <h2 className="font-medium text-xl">POST + Upload</h2>
      <div>
        <form
          className="w-1/2 flex flex-col justify-center gap-4"
          onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>Nama</label>
            <input
              type="text"
              className="border py-2 px-4"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              className="border py-2 px-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              className="border py-2 px-4"
              value={password}
              autoComplete="true"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Gambar Profil</label>
            <input
              type="file"
              accept=".jpg, .png"
              className="border py-2 px-4"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <input
              type="submit"
              value="Kirim Data"
              className="border py-2 px-4 font-medium"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

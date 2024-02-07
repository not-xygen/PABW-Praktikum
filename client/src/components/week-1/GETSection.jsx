import { useEffect, useState } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080",
});

export function GETSection() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await client.get("/users");
        setUserData(response.data.data);
      } catch (error) {
        setError("Gagal mengambil data.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log(userData);

  return (
    <div>
      <h1 className="text-xl font-medium">GET</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : userData && userData.length > 0 ? (
        <ul>
          {userData.map((user) => (
            <li key={user.fullname} className="list-disc list-inside">
              {user.fullname}
            </li>
          ))}
        </ul>
      ) : (
        <p>Data User Kosong.</p>
      )}
    </div>
  );
}

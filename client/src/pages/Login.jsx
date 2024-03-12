import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [cookies, setCookie] = useCookies(["TOKEN"]);
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      const decodedResult = jwtDecode(`${result.data}`);
      console.log(new Date(Date.now() + decodedResult.exp));
      setCookie("TOKEN", result.data, {
        expires: new Date(Date.now() + decodedResult.exp),
      });
      if (cookies) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 ">
        <h1 className="text-xl font-bold">Login</h1>
        <form
          className="flex flex-col items-center p-5 border rounded-md shadow w-max"
          onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              className="border"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              className="border"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          />
        </form>
      </div>
    </div>
  );
}

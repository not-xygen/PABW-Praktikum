import { useState } from "react";

export default function LoginPage() {
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
      alert(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 ">
        <h1 className="text-xl font-bold">Login</h1>
        <form className="p-5 border rounded-md shadow" onSubmit={handleSubmit}>
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
            className="flex w-full mt-2 text-center text-white bg-blue-400 rounded-md"
          />
        </form>
      </div>
    </div>
  );
}

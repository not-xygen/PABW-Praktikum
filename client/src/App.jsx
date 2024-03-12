import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className="w-screen px-24 py-8 shadow">
        <Link to={"/"} className="text-xl font-black">
          Praktikum PABW
        </Link>
      </header>
      <main className="flex flex-col items-center w-screen h-screen">
        <Outlet />
      </main>
    </>
  );
}

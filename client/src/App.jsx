import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className="w-screen shadow px-24 py-8">
        <Link to={"/"} className="text-xl font-black">
          Praktikum PABW
        </Link>
      </header>
      <main className="w-screen h-screen flex flex-col items-center">
        <Outlet />
      </main>
    </>
  );
}

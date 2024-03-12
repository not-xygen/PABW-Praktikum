import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function HomePage() {
  const [removeCookie] = useCookies(["TOKEN"]);

  return (
    <section className="flex flex-col w-1/2 gap-8 px-32 py-12">
      <Link
        to={"/week-1"}
        className="px-8 py-8 space-y-4 transition duration-75 ease-in-out rounded-md shadow hover:bg-gray-100">
        <h1>Minggu 1</h1>
        <p className="text-2xl font-bold">GET, POST, Upload, & Download</p>
      </Link>
      <div className="flex flex-col w-full px-8 py-8 space-y-4 transition duration-75 ease-in-out rounded-md shadow">
        <h1>Minggu 2</h1>
        <p className="text-2xl font-bold">
          Login Page, Register Page dan Cookies
        </p>
        <div className="flex">
          <Link
            to={"/login"}
            className="w-1/2 px-8 py-8 space-y-4 transition duration-75 ease-in-out rounded-md shadow hover:bg-gray-100">
            Ke Login page
          </Link>
          <Link
            to={"/register"}
            className="w-1/2 px-8 py-8 space-y-4 transition duration-75 ease-in-out rounded-md shadow hover:bg-gray-100">
            Ke Register Page
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full px-8 py-8 space-y-4 transition duration-75 ease-in-out rounded-md shadow">
        <h1>Minggu 3</h1>
        <p className="text-2xl font-bold">Hanya 18+, User-Roles, Signout</p>
        <div className="flex">
          <Link
            to={"/bahaya"}
            className="w-1/2 px-8 py-8 space-y-4 transition duration-75 ease-in-out rounded-md shadow hover:bg-gray-100">
            Ke Page 18+
          </Link>
          <button
            type="button"
            onClick={() => removeCookie("TOKEN")}
            className="w-1/2 px-8 py-8 space-y-4 transition duration-75 ease-in-out rounded-md shadow hover:bg-gray-100">
            Sign Out
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full px-8 py-8 space-y-4 transition duration-75 ease-in-out rounded-md shadow">
        <h1>Minggu 4</h1>
        <p className="text-2xl font-bold">Logs</p>
        <p className="text-lg">Logs di-implementasikan di Back-End</p>
      </div>
      <button
        type="button"
        disabled
        className="px-8 py-8 bg-gray-100 rounded-md shadow cursor-not-allowed text-start">
        Minggu 4
      </button>
    </section>
  );
}

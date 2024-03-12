import { Link } from "react-router-dom";

export default function HomePage() {
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
        <p className="text-2xl font-bold">Login Page & Register Page</p>
        <div className="flex">
          <Link
            to={"/login"}
            className="w-1/2 px-8 py-8 space-y-4 transition duration-75 ease-in-out rounded-md shadow hover:bg-gray-100">
            Ke Login page
          </Link>
          <Link
            to={"/week-1"}
            className="w-1/2 px-8 py-8 space-y-4 transition duration-75 ease-in-out rounded-md shadow hover:bg-gray-100">
            Ke Register Page
          </Link>
        </div>
      </div>
      <button
        type="button"
        disabled
        className="px-8 py-8 bg-gray-100 rounded-md shadow cursor-not-allowed text-start">
        Minggu 2
      </button>
    </section>
  );
}

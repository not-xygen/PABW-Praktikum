import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col px-32 py-12 gap-8 w-1/2">
      <Link
        to={"/week-1"}
        className="shadow px-8 py-8 rounded-md space-y-4 hover:bg-gray-100 transition ease-in-out duration-75">
        <h1>Minggu 1</h1>
        <p className="text-2xl font-bold">GET, POST, Upload, & Download</p>
      </Link>
      <button
        type="button"
        disabled
        className="shadow px-8 py-8 rounded-md text-start bg-gray-100 cursor-not-allowed">
        Minggu 2
      </button>
    </section>
  );
}

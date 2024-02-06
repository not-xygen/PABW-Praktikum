import { DownloadSection } from "../components/week-1/DownloadSection";
import { GETSection } from "../components/week-1/GETSection";
import { POSTUploadSection } from "../components/week-1/POSTUploadSection";

export default function Week1() {
  return (
    <>
      <section className="w-1/2 py-12 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">Praktikum 1</h1>
        <GETSection />
        <POSTUploadSection />
        <DownloadSection />
      </section>
    </>
  );
}

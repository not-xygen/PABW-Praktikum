import { DownloadSection } from "../components/week-1/DownloadSection";
import { GETSection } from "../components/week-1/GETSection";
import { POSTUploadSection } from "../components/week-1/POSTUploadSection";

export default function Week1Page() {
  return (
    <section className="flex flex-col w-1/2 gap-8 py-12">
      <h1 className="text-3xl font-bold">Praktikum 1</h1>
      <GETSection />
      <POSTUploadSection />
      <DownloadSection />
    </section>
  );
}

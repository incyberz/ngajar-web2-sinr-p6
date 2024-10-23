import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./insho-styles.css";

export default function CVOnline() {
  return (
    <section className="text-center">
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
    </section>
  );
}

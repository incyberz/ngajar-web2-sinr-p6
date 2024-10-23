import foto from "../foto.jpg";

function Profile() {
  return <img src={foto.src} alt="Iin Sholihin" className="fotoku" />;
}

export default function Hero() {
  return (
    <div>
      <h1 className="text-gray-300 font-bold">CV Online</h1>
      <h2 className="text-3xl">Iin Sholihin</h2>
      <Profile />
      <p>
        Saya adalah seorang Web Developer, IT Trainer, dan juga Hobbies Farmer.
        Cita-cita saya ingin menjadi programmer internasional. Saya juga ingin
        masuk syurga tanpa hisab sekeluarga.
      </p>
    </div>
  );
}

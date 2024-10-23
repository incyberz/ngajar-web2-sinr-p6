function ItemRiwayatPekerjaan(props: any) {
  return (
    <div className="border-2 m-2 rounded-lg bg-red-600 text-yellow-300 p-2">
      <div>{props.sebagai}</div>
      <div>{props.instansi}</div>
      <div>{props.tahun}</div>
    </div>
  );
}

export default function RiwayatPekerjaan() {
  return (
    <div className="container">
      <h2 className="mt-40 text-2xl text-yellow-400">Riwayat Pekerjaan</h2>

      <ItemRiwayatPekerjaan
        sebagai="Staf IT"
        instansi="Dinas Sosial Jawa Barat"
        tahun="1999-2002"
      />
      <ItemRiwayatPekerjaan
        sebagai="Remote Programmer"
        instansi="CV. Media Global Sarana"
        tahun="2020-skg"
      />
      <ItemRiwayatPekerjaan
        sebagai="Dosen"
        instansi="Masoem University"
        tahun="2020-skg"
      />
      <ItemRiwayatPekerjaan
        sebagai="IT Trainer"
        instansi="Masoem University"
        tahun="2022-skg"
      />
    </div>
  );
}

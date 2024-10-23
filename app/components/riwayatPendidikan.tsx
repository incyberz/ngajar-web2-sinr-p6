function ItemRiwayat(props: any) {
  return (
    <div className="border-2 m-2 rounded-lg bg-red-600 text-yellow-300 p-2">
      <div>{props.jenjang}</div>
      <div>{props.sekolah}</div>
      <div>{props.tahun}</div>
    </div>
  );
}

export default function RiwayatPendidikan() {
  return (
    <div className="container">
      <h2 className="mt-40 text-2xl text-yellow-400">Riwayat Pendidikan</h2>

      <ItemRiwayat jenjang="SD" sekolah="SDN 1 Tanjungsari" tahun="1999-2002" />
      <ItemRiwayat
        jenjang="SMP"
        sekolah="SLTPN 1 Tanjungsari"
        tahun="1999-2002"
      />
      <ItemRiwayat
        jenjang="SMA"
        sekolah="SMAN 1 Tanjungsari"
        tahun="2002-2005"
      />
      <ItemRiwayat
        jenjang="Diploma"
        sekolah="Masoem University"
        tahun="2005-2008"
      />
      <ItemRiwayat
        jenjang="Sarjana"
        sekolah="Masoem University"
        tahun="2009-2010"
      />
      <ItemRiwayat jenjang="Magister" sekolah="STMIK LIKMI" tahun="2015-2017" />
      <ItemRiwayat jenjang="Doktor" sekolah="ITB" tahun="2018-2022" />
    </div>
  );
}

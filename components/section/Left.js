export default function Left() {
  return (
    <div className="relative mt-24 h-full space-y-4">
      <h3 className="text-gray-500 font-semibold text-2xl">Merhaba</h3>
      <p className="text-gray-900 text-2xl">
        Ben Koray Özdemir. Ben bir <b>dijital pazarlama</b> uzmanıyım.
      </p>
      <p>
        Uzun süreden beridir dijital pazarlama üzerinde çalışıyorum.
        Müşterilerin internette sizi bulmasını sağlamak için web sitelerinden
        yerel işletme girişlerine, mobil uygulamalardan sosyal medyaya kadar
        uzanan çok çeşitli yollar var. Ben bu yolları sizin için
        oluşturabilirim.
      </p>
      <div>
        <div className="space-x-4">
          <button className="bg-gray-800 text-lg text-white w-32 h-11 rounded hover:bg-gray-900 transition-colors ease-in-out duration-300 ">
            Hire me
          </button>
          <button className="border text-lg border-gray-800 w-32 h-11 rounded hover:bg-gray-900 transition-colors duration-300 hover:text-white">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}

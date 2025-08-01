export default function Header() {
  return (
    <header className="bg-purple-700 text-white w-full">
      <nav data-aos="fade-down" className="flex flex-wrap justify-center md:justify-start gap-4 py-4 text-sm font-semibold italic px-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#education" className="hover:underline">Education</a>
        <a href="#awards" className="hover:underline">Certificate & Interests</a>
        <a href="#skills" className="hover:underline">Skills & Languages</a>
      </nav>
      <div className="flex flex-col md:flex-row justify-between items-center px-6">
        <div data-aos="fade-right" className="w-full md:w-2/2  py-50 text-black bg-cover bg-center" style={{ backgroundImage: "url('/images/08fe21_6fc7cb797fc542dc8b4fea9e2cbd85f7~mv2_d_3610_2357_s_2.avif')" }}>
          <div className="pl-8 md:pl-16 md:pt-10">
            <p className="text-lg tracking-widest">HELLO, I'M</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-2">KATHIR M</h1>
            <p className="text-sm font-semibold italic">FRONTEND DEVELOPER.</p>
          </div>
        </div>
        <div data-aos="fade-left" className="w-full md:w-1/2 text-center py-8">
          <img src="./images/WhatsApp Image 2025-07-24 at 11.41.12 AM.jpeg" alt="kathir img" className="w-40 h-40 md:w-60 md:h-60 mx-auto rounded-full mb-4 p-2" />
          <h2 className="text-2xl font-bold">Kathir Mahendran</h2>
          <p className="text-sm mt-1">Bsc(Information Technology)</p>
          <div className="mt-4 text-sm">
            <p>kathirmskgt@gmail.com</p>
            <p>8072071990</p>
          </div>
          <div className="flex justify-center mt-3 gap-4 text-xl">
            <img src="./images/7528824071724d12a3e6c31eee0b40d4.avif" alt="lin" className="w-6 h-6" />
            <img src="./images/81af6121f84c41a5b4391d7d37fce12a.avif" alt="insta" className="w-6 h-6" />
            <img src="./images/23fd2a2be53141ed810f4d3dcdcd01fa.avif" alt="facebook" className="w-6 h-6" />
          </div>
          <div className="mt-5">
            <button className="bg-purple-600 hover:bg-black text-white font-semibold py-1 px-5 rounded">Download CV</button>
          </div>
        </div>
      </div>
    </header>
  );
}
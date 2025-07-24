

export default function Header() {
  return (
    <header className="bg-purple-700  text-white w-full h-133">
      <nav data-aos="fade-down" className="flex items-center  space-x-8 py-4 text-sm font-semibold italic pl-2">
        <a href="#about" className="hover:underline">About</a>
        <a href="#education" className="hover:underline">Education</a>
        <a href="#awards" className="hover:underline">Certificate & Interests</a>
        <a href="#skills" className="hover:underline">Skills & Languages</a>
        
      </nav>

      
      <div className="flex flex-col md:flex-row justify-between ">
        


        <div  data-aos="fade-right" className="text-left text-black h-120 w-250"
         style={{
            backgroundImage: "url('/images/08fe21_6fc7cb797fc542dc8b4fea9e2cbd85f7~mv2_d_3610_2357_s_2.avif')",          
          }}>
          <p className="text-lg tracking-widest pt-90 pl-40">HELLO, I'M</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-2 pl-40">KATHIR M</h1>
          <p className="  space-x-8  text-sm font-semibold italic pl-40">FRONTEND DEVELOPER.</p>
        </div>

        
        <div data-aos="fade-left" className=" md:mr-10 text-center ">
          <img
            src="./images/WhatsApp Image 2025-07-24 at 11.41.12 AM.jpeg" 
            alt="kathir img"
            className="w-60 h-60 mx-auto md:mx-10 rounded-full mb-4 p-3"
          />
          <h2 className="text-2xl font-bold md:mx-7 ">Kathir Mahendran.</h2>
          <p className="text-sm mt-1">Bsc(Information Technology)</p>

          <div className="mt-4 text-sm">
            <p>kathirmskgt@gmail.com</p>
            <p>8072071990</p>
          </div>

          <div className="flex justify-center grid-row mt-3 space-x-4 text-xl">
           <img  src="./images/7528824071724d12a3e6c31eee0b40d4.avif" alt="lin" />
           <img src="./images/81af6121f84c41a5b4391d7d37fce12a.avif" alt="insta" />
           <img src="./images/23fd2a2be53141ed810f4d3dcdcd01fa.avif" alt="facebook" />
           
          </div>
          <div className="p-5">
              <button className="bg-purple-600 hover:bg-black text-white font-semibold py-1  px-5 rounded ">Download CV
    </button>
          </div>
        

        </div>
      </div>
    </header>
  );
}


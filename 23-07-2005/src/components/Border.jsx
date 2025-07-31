export default function Border() {
  return (
    <section className="bg-purple-100 py-10 px-6 md:px-16 text-gray-800">
      <div data-aos="zoom-out-right" className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">I'd love to hear from you.</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#"><img src="./images/6ea5b4a88f0b4f91945b40499aa0af00.avif" alt="lin" className="w-6 h-6" /></a>
            <a href="#"><img src="./images/01c3aff52f2a4dffa526d7a9843d46ea.avif" alt="insta" className="w-6 h-6" /></a>
            <a href="#"><img src="./images/0fdef751204647a3bbd7eaa2827ed4f9.avif" alt="facebook" className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="mb-1">kathirmskgt@gmail.com</p>
          <p className="mb-4">80-7207-1990</p>
          <button data-aos="flip-right" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 mt-4">Download CV</button>
        </div>
      </div>
      <div data-aos="flip-up" className="mt-10 text-center bg-purple-700 text-white py-4">
        © 2025 By KATHIR MAHENDRAN.
      </div>
    </section>
  );
}
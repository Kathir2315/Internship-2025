export default function Awards() {
  return (
    <section id="awards" className="bg-white py-20 px-6 md:px-16">
      <div data-aos="zoom-out-right" className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl text-purple-700 italic font-semibold mb-4">Certificate</h2>
          <div className="space-y-2">
            <p>Frontend Developer Certificate</p>
            <p>Cricket State Level Certificate</p>
            <p>District Level KHO KHO Certificate</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl text-purple-700 italic font-semibold mb-4">Interests</h2>
          <div className="space-y-2">
            <p>Cricket</p>
            <p>Music</p>
            <p>Drawing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
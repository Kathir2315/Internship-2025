export default function Progress() {
  const skills = [
    { name: "HTML", value: 80 },
    { name: "CSS", value: 80 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 30 },
    { name: "GitHub", value: 70 },
  ];

  return (
    <section id="skills" data-aos="zoom-out-right" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-16">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">My Skills</h2>
      <div className="w-full max-w-xl space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">{skill.name}</span>
              <span className="text-gray-600">{skill.value}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-purple-600 h-4 rounded-full"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

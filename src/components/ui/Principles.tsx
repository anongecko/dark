export const Principles = () => {
  const principles = [
    { title: "Privacy First", description: "We prioritize user privacy in all our operations" },
    { title: "Continuous Learning", description: "Our AI constantly evolves to stay ahead of threats" },
    { title: "Transparency", description: "We believe in clear communication about our processes" },
    { title: "Ethical AI", description: "Committed to responsible and ethical AI development" },
    { title: "Collaboration", description: "Working together with the cybersecurity community" },
    { title: "User Empowerment", description: "Equipping users with knowledge and tools for better security" },
  ];

  return (
    <section id="principles" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-text mb-8 text-center">Our Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-text mb-2">{principle.title}</h3>
              <p className="text-text">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Benefits = () => {
  const benefits = [
    { title: "24/7 Protection", description: "Round-the-clock monitoring and threat detection" },
    { title: "AI-Powered", description: "Leveraging advanced machine learning algorithms" },
    { title: "Real-time Updates", description: "Constantly evolving to combat new threats" },
    { title: "Easy Integration", description: "Seamlessly integrates with existing systems" },
    { title: "Customizable", description: "Tailored solutions for your specific needs" },
    { title: "Cost-Effective", description: "Reduce cybersecurity costs with automation" },
  ];

  return (
    <section id="benefits" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-text mb-8 text-center">Benefits of NightGPT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-text mb-2">{benefit.title}</h3>
              <p className="text-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

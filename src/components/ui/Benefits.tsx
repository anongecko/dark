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
    <section id="benefits" className="py-16 hero-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-crimson mb-8 text-center font-primary">Benefits of DarkGPT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-md shadow-crimson-upper-right h-96 flex flex-col justify-center items-center transition-transform duration-200 ease-in-out hover:scale-110"
            >
              <h3 className="text-xl font-semibold text-crimson mb-2 font-primary text-center">{benefit.title}</h3>
              <p className="text-text text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
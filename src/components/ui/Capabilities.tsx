export const Capabilities = () => {
  const capabilities = [
    "Advanced threat detection and prevention",
    "Automated incident response",
    "Network traffic analysis",
    "Vulnerability assessment and management",
    "Phishing and social engineering protection",
    "Malware analysis and removal",
    "Cloud security monitoring",
    "Endpoint protection",
    "Data encryption and secure communication",
    "Compliance management and reporting",
  ];

  return (
    <section id="capabilities" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-text mb-8 text-center">NightGPT Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-text">{capability}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

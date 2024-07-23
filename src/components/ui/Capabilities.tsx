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
    <section id="capabilities" className="py-16 hero-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-crimson mb-8 text-center font-primary">DarkGPT Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M5 13l4 4L19 7" 
                  stroke="url(#crimson-gradient)" 
                  strokeWidth="3"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="crimson-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DC143C" />
                    <stop offset="100%" stopColor="#8B0000" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-white font-secondary">{capability}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const Pricing = () => {
  const plans = [
    { 
      price: "$99",
      name: "Basic",
      features: [
        "24/7 threat monitoring",
        "Automated incident response",
        "Network traffic analysis",
        "Email security"
      ]
    },
    { 
      price: "$199",
      name: "Pro",
      features: [
        "All Basic features",
        "Advanced AI-powered detection",
        "Cloud security integration",
        "Customized risk assessment"
      ]
    },
    { 
      price: "$399",
      name: "Enterprise",
      features: [
        "All Pro features",
        "Dedicated security team",
        "Compliance management",
        "Bespoke security solutions"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 hero-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-crimson mb-8 text-center font-primary">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gradient-to-br from-red-900 to-red-950 p-6 rounded-lg shadow-lg border-2 border-crimson flex flex-col h-[450px]">
              <div className="text-center mb-4">
                <h3 className="text-4xl font-bold text-white mb-2">
                  {plan.price}<span className="text-xl font-normal">/month</span>
                </h3>
                <p className="text-sm text-white opacity-80">
                  or {(parseFloat(plan.price.slice(1)) * 5.5).toFixed(2)}/6 months
                </p>
                <p className="text-sm text-white opacity-80">
                  or {(parseFloat(plan.price.slice(1)) * 10).toFixed(2)}/year
                </p>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 text-center">{plan.name}</h4>
              <ul className="text-white space-y-2 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
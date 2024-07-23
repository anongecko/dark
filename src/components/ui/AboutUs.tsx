export const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-text mb-8">About NightGPT</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/images/nightgpt-logo.png" alt="NightGPT Logo" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-text text-lg mb-4">
              NightGPT is a cutting-edge AI specializing in cyber security, designed to make the web a far safer place for everyone. Our advanced algorithms and machine learning capabilities work tirelessly to detect, prevent, and mitigate cyber threats in real-time.
            </p>
            <p className="text-text text-lg mb-6">
              With NightGPT, businesses and individuals can rest assured that their digital assets are protected by the most sophisticated AI-driven security system available.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-2 text-sm font-medium text-text border-2 border-text rounded-lg hover:bg-text hover:text-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text">
                Contact Us
              </button>
              <button className="px-6 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

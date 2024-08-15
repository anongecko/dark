import Image from 'next/image';
import { Button } from '../ui/button'; // If you have a shared Button component

export const AboutUs = () => {
  return (
    <section id="about" className="py-32 hero-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-crimson mb-8 font-primary">About DarkGPT</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <Image
            src="/logoWhite.svg"
            alt="DarkGPT Logo"
            width={240}
            height={240}
            className="w-4/5 h-auto md:w-1/3 mb-8 md:mb-0"
          />

          <div className="md:w-2/3 text-white space-y-6"> 
            <p className="text-lg">
              DarkGPT is a cutting-edge AI specializing in cyber security, designed to make the web a far safer place for everyone. Our advanced algorithms and machine learning capabilities work tirelessly to detect, prevent, and mitigate cyber threats in real-time.
            </p>
            <p className="text-lg">
              With DarkGPT, businesses and individuals can rest assured that their digital assets are protected by the most sophisticated AI-driven security system available.
            </p>

            <div className="flex space-x-4">
              <Button variant="outline" className="rounded-full flex justify-center items-center hover:scale-110 active:scale-100 transition-transform duration-200 ease-in-out">Contact Us</Button>
              <Button className="rounded-full flex justify-center items-center hover:scale-110 active:scale-100 transition-transform duration-200 ease-in-out">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

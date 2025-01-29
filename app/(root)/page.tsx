import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center px-6 md:px-12">
    
      
      {/* Hero Content */}
      <div className="text-center max-w-4xl mt-12">
        <div className="inline-flex items-center bg-gray-800 px-4 py-2 rounded-full text-sm font-medium">
          <span className="mr-2">🚀</span> #1 Digital company in the town!
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mt-6">
          From First Touch Point <br /> To Last Mile Delivery
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Retkom empowers e-commerce growth in MENA region via orchestrating expertise, strategies, and
          technologies to enable innovative brands & retailers to sell online and thrive in the digital economy.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="#" className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600">
            Connect with us
          </a>
          <a href="#" className="px-6 py-3 border border-gray-500 text-white rounded-lg font-medium hover:bg-gray-800">
            Browse our key services ⚡
          </a>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="mt-12">
        <Image src="/ring.png" alt="Hero Illustration" width={500} height={500} className="w-full max-w-md" />
      </div>
    </div>
  );
}

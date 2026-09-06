import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Budget Buddy</h1>
        <p className="text-xl mb-8">Your personal finance tracker</p>
        <Link 
          href="/workspace" 
          className="bg-[#ededed] text-[#1f1f1f] px-6 py-3 rounded-xl font-medium hover:bg-[#dedede]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
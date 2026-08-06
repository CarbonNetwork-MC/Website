import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* Navbar */}
    <div className="bg-white shadow-md">
      <nav className="flex items-center gap-8 mx-40 p-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-lg text-emerald-500">Carbon Network</span>
        </div>
        <div className="space-x-4">
          <a href="/" className="font-bold text-blue-500 hover:text-blue-700">
            Home
          </a>
          <a href="/about" className="text-gray-600 hover:text-blue-700">
            About us
          </a>
        </div>
      </nav>
    </div>
    {/* End of Navbar */}
    {/* Main content */}
    <main className="flex flex-col items-center justify-center min-h-screen py-2 hero">
      <div className="bg-white shadow-md rounded-lg px-8 py-16 text-center">
        <h1 className="text-6xl font-bold text-gray-800">Welcome to <span className="text-emerald-500">Carbon Network</span></h1>
        <p className="mt-4 text-xl text-gray-600">
          A Minecraft Server Network that focuses on providing a fun and engaging experience for players.
        </p>
      </div>
    </main>
    {/* End of main content */}
    {/* Footer */}
    <footer className="bg-white shadow-md">
      <div className="flex items-center justify-center p-4">
        <span className="text-gray-600">&copy; 2024-{new Date().getFullYear()} Carbon Network. All rights reserved.</span>
      </div>
    </footer>
    {/* End of footer */}
    {/* End of page */}
    </>
  );
}

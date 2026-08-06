import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* Navbar */}
    <div className="bg-white shadow-md">
      <nav className="flex items-center justify-between lg:justify-start gap-8 lg:mx-40 p-4">
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
          <a href="/" className="text-gray-600 hover:text-blue-700">
            Home
          </a>
        </div>
      </nav>
    </div>
    {/* End of Navbar */}
    {/* Main content */}
    <main className="flex flex-col items-center justify-center min-h-screen py-2 hero">
      <div className="bg-white shadow-md rounded-lg text-center mx-2 lg:mx-0 px-8 py-16">
        <h1 className="text-6xl font-bold text-gray-800">Project not found.</h1>
        <p className="mt-4 text-xl text-gray-600">
          The project you are looking for does not exist or has been removed. Please check the URL or return to the homepage.
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

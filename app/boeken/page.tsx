import Image from "next/image";

export default function Librarian() {
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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 bg-white text-center shadow-md rounded-lg mx-2 lg:mx-0 px-4 lg:px-8 py-8 lg:py-16 boeken-gallery">
            <Image
              src="/boek_2.png"
              alt="First Floor Layout"
              width={800}
              height={800}
              className=""
            />
            <Image
              src="/boek_1.png"
              alt="Second Floor Layout"
              width={800}
              height={800}
              className=""
            />
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

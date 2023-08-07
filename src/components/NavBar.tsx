import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-navColor roundedk">
      <div className="max-w-full mx-auto py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href="/" className="text-white font-bold text-xl">
                <Image src="/logo.svg" alt="My SVG" width={200} height={200} />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/about"
                  className="group text-gray-300 transition duration-300 px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-600"></span>
                </Link>
                <Link
                  href="/products"
                  className="group text-gray-300 transition duration-300 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Products
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-600"></span>
                </Link>
                <Link
                  href="/contact"
                  className="group text-gray-300 transition duration-300 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-600"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-10 flex items-baseline space-x-10">
            <Link href="/" className="p-2 hover:bg-indigo-800 hover:rounded-lg">
              <Image src="/cart.svg" alt="cart icon" width={25} height={30} />
            </Link>
            <Link href="/" className="p-2 hover:bg-indigo-800 hover:rounded-lg">
              <Image src="/user.svg" alt="cart icon" width={25} height={30} />
            </Link>
            <Link href="/" className="p-2 hover:bg-indigo-800 hover:rounded-lg">
              <Image
                src="/language.svg"
                alt="cart icon"
                width={25}
                height={30}
              />
            </Link>

            <Link href="/" className="p-2 hover:bg-indigo-800 hover:rounded-lg">
              <Image src="/search.svg" alt="cart icon" width={25} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

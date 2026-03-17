import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          REFLECT
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-500 transition">
            Products
          </Link>
          <Link href="/categories" className="hover:text-gray-500 transition">
            Categories
          </Link>
          <Link href="/cart" className="hover:text-gray-500 transition">
            Cart
          </Link>
        </div>

        <Link
          href="/cart"
          className="rounded-md border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}
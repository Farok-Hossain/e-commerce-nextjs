import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="text-center p-2 space-x-4 uppercase">
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <button className="btn btn-accent">Login</button>
      </div>
    </div>
  );
};

export default Navbar;

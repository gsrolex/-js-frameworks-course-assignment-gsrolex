import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">contact</Link>
        <Link href="/login">login</Link>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}

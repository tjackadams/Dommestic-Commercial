import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="mb-md-4">{children}</main>
      <Footer />
    </>
  );
}

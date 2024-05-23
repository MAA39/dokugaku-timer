import Footer from "../components/footer";
import Header from "../components/header";
import SideBar from "../components/side-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-1">
        <SideBar />
        <div className="flex-1 bg-muted/80">{children}</div>
      </main>
      <Footer />
    </>
  );
}

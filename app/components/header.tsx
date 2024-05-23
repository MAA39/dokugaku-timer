import { MobileNav } from "./mobile-nav";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container h-16 flex items-center gap-4">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <p className="font-bold text-lg">dokugaku-timer</p>
      </div>
    </header>
  );
}

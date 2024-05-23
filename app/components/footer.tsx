import { ModeToggle } from "@/components/mode-toggle";

export default function Footer() {
  return (
    <footer className="border sticky top-full">
      <div className="container h-16 flex justify-between items-center ">
        <p className="text-muted-foreground">&copy; MAA</p>
        <ModeToggle />
      </div>
    </footer>
  );
}

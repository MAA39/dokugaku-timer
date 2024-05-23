import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TAGS } from "@/lib/tag";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        {/* ホバーされている状態では文字を濃く、そうでなければ文字を薄くしたい */}
        <div className="flex flex-col p-4">
          {TAGS.map((tag) => (
            <Button
              key={tag.id}
              className="justify-start"
              variant="ghost"
              asChild>
              <Link href={`/${tag.id}`}>{tag.label}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

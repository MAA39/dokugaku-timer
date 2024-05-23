import { Button } from "@/components/ui/button";
import { TAGS } from "@/lib/tag";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="hidden md:block w-40 border-r">
      <div className="flex flex-col p-4 hover:text-lg text-muted-foreground">
        {TAGS.map((tag) => (
          <Button
            key={tag.id}
            className="justify-start"
            variant="ghost"
            asChild>
            <Link href={`/tags/${tag.id}`}>{tag.label}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <div className="p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        <div className="p-4 hover:(scale-[103%] shadow-lg) transition duration-150 ease-in-ou relative aspect-square border rounded-md shadow-sm bg-card">
          <div className="aspect-video border mb-2"></div>
          <Link href="" target="_blank" className="text-sm font-medium mb-2">
            {id} : Title
            <ArrowUpRightIcon size={14} className="inline" />
            <span className="absolute inset-0"></span>
          </Link>
          <div className="flex flex-wrap gap-2 relative z-10">
            <Link
              href={`/tags/xxx`}
              className="px-1.5 whitespace-nowrap py-0.1 border text-sm text-muted-foreground bg-muted rounded">
              aaaaaaaaaaaaaaaa
            </Link>
            <Link
              href={`/tags/xxx`}
              className="px-1.5 whitespace-nowrap py-0.1 border text-sm text-muted-foreground bg-muted rounded">
              aaaaaaaaaaaaaaaa
            </Link>
            <Link
              href={`/tags/xxx`}
              className="px-1.5 whitespace-nowrap py-0.1 border text-sm text-muted-foreground bg-muted rounded">
              aaaaaaaaaaaaaaaa
            </Link>
          </div>
        </div>
        <div className="aspect-square border rounded-md shadow-sm bg-card">
          XXX
        </div>
        <div className="aspect-square border rounded-md shadow-sm bg-card">
          XXX
        </div>
        <div className="aspect-square border rounded-md shadow-sm bg-card">
          XXX
        </div>
        <div className="aspect-square border rounded-md shadow-sm bg-card">
          XXX
        </div>
      </div>
    </div>
  );
}

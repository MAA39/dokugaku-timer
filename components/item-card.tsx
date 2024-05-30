import { Tag } from "@/type/tag";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ItemCard({
  title,
  tags,
  href,
  imageURL,
}: {
  title: string;
  tags: Tag[];
  href: string;
  imageURL: string;
}) {
  return (
    <>
      <div className="p-4 hover:scale-[103%] hover:shadow-lg transition duration-150 ease-in-ou relative aspect-square border rounded-md shadow-sm bg-card">
        <div className="aspect-video relative border mb-2 overflow-hidden">
          <Image fill objectFit="cover" src={imageURL} alt="" />
        </div>
        <h2>
          <Link
            href={href}
            target="_blank"
            className="text-sm font-medium mb-2">
            {title} : Title
            <ArrowUpRightIcon size={14} className="inline" />
            <span className="absolute inset-0"></span>
          </Link>
        </h2>
        <div className="flex flex-wrap gap-2 relative z-10">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tags/${tag.id}`}
              className="px-1.5 whitespace-nowrap py-0.1 border text-sm text-muted-foreground bg-muted rounded">
              {tag.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

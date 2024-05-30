import ItemCard from "@/components/item-card";
import { ItemType, allItems } from "@/data";

export default function Page({ params: { id } }: { params: { id: ItemType } }) {
  const currentItems = allItems[id] || [];

  console.log(allItems);

  if (currentItems.length === 0) {
    return (
      <div className="text-sm text-muted-foreground p-10">
        このページは存在しません
      </div>
    );
  }
  return (
    <div className="p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
      {currentItems.map((item) => (
        <ItemCard
          key={item.title}
          title={item.title}
          tags={item.tags}
          href={item.href}
          imageURL={item.imageURL}
          // {...item}
        />
      ))}
    </div>
  );
}

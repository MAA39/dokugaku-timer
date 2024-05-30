import { icons } from "./icons";
import { illusts } from "./illust";
import { photos } from "./photo";

export * from "./illust";

export const allItems = {
  illusts,
  photos,
  icons,
} as const;

export type ItemType = keyof typeof allItems;

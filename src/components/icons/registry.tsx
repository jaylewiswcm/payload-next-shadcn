import {
  Tag, ArrowRightLeft, BookOpen, PenLine, MapPinned, Star, Wrench, Truck, 
  Stethoscope, Users, Newspaper, BookOpenText, CirclePoundSterling, MapPinHouse, 
  CircleQuestionMark, Scooter, HandHelping, Sun, Feather, FoldVertical, Expand
  , type LucideIcon,
} from "lucide-react";

export const icons = {
  Tag, ArrowRightLeft, BookOpen, PenLine, MapPinned, Star, Wrench, Truck, 
  Stethoscope, Users, Newspaper, BookOpenText, CirclePoundSterling, MapPinHouse, 
  CircleQuestionMark, Scooter, HandHelping, Sun, Feather, FoldVertical, Expand
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
export const iconNames = Object.keys(icons) as IconName[];

export function isIconName(v: unknown): v is IconName {
  return typeof v === 'string' && v in icons
}

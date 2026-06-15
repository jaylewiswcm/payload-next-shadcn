import {
  Tag, ArrowRightLeft, BookOpen, PenLine, MapPinned, Star, Wrench, Truck, 
  Stethoscope, Users, Newspaper, BookOpenText, CirclePoundSterling, MapPinHouse, 
  CircleQuestionMark, Scooter, HandHelping, Sun, Feather, FoldVertical, Expand, Clock, ScanEye
  , type LucideIcon,
} from "lucide-react";

export const icons = {
  Tag, ArrowRightLeft, BookOpen, PenLine, MapPinned, Star, Wrench, Truck, 
  Stethoscope, Users, Newspaper, BookOpenText, CirclePoundSterling, MapPinHouse, 
  CircleQuestionMark, Scooter, HandHelping, Sun, Feather, FoldVertical, Expand, Clock, ScanEye
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
export const iconNames = Object.keys(icons) as IconName[];

export function isIconName(v: unknown): v is IconName {
  return typeof v === 'string' && v in icons
}

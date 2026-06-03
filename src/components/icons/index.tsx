import { icons, isIconName, type IconName } from "./registry";
import { customIcons, isCustomIconName, type CustomIconName } from "./custom-registry";

type Props = {
  name: string | IconName | CustomIconName;
  className?: string;
};

export default function Icon({ name, className }: Props) {
  if (isIconName(name)) {
    const LucideIcon = icons[name];
    return <LucideIcon className={className} />;
  }

  if (isCustomIconName(name)) {
    const CustomIcon = customIcons[name];
    return <CustomIcon className={className} />;
  }

  console.warn(`Icon "${name}" not found`);
  return null;
}
import { icons, type LucideProps } from "lucide-react";

interface LucideIconProps extends LucideProps {
  name: string;
}

/** Renders a lucide-react icon by its string name, as stored in the data layer. */
export function LucideIcon({ name, ...props }: LucideIconProps) {
  const Icon = icons[name as keyof typeof icons];
  if (!Icon) return null;
  return <Icon {...props} />;
}

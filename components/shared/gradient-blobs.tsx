import { cn } from "@/lib/utils";

/** Decorative, absolutely-positioned blurred gradient blobs used as ambient section backgrounds. */
export function GradientBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/25 blur-[100px] sm:h-96 sm:w-96" />
      <div className="absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-accent/20 blur-[100px] sm:h-80 sm:w-80" />
      <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-primary/10 blur-[100px]" />
    </div>
  );
}

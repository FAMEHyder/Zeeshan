import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBlobs } from "@/components/shared/gradient-blobs";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center">
      <GradientBlobs />
      <p className="font-heading text-8xl font-extrabold text-gradient-brand sm:text-9xl">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
        This page took a wrong turn.
      </h1>
      <p className="mt-3 max-w-md text-balance text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get
        you back on track.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg" className="rounded-full">
          <Link href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <Link href="/#contact">
            <ArrowLeft className="h-4 w-4" />
            Contact Me
          </Link>
        </Button>
      </div>
    </main>
  );
}

"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-md text-center">
        <div className="text-8xl mb-6">⚠️</div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Don't worry, this happens sometimes. Let's try again!
        </p>
        <Button
          onClick={reset}
          variant="neon"
          size="lg"
          className="text-lg"
        >
          <RotateCcw className="mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Something went wrong!</h1>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again or contact support if the problem persists.
        </p>
        <div className="space-x-4">
          <Button onClick={reset} variant="default">
            Try Again
          </Button>
          <Button onClick={() => window.location.href = "/"} variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
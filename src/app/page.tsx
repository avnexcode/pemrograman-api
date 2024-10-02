import React from "react";
import HomeLink from "@/components/elements/HomeLink";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-fuchsia-600 mb-8">TESTING</h1>

      <div className="space-y-4">
        <div className="flex flex-col gap-5 items-center justify-center">
          <HomeLink href="album" />
          <HomeLink href="post" />
        </div>
      </div>
    </div>
  );
}

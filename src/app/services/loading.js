'use client';

import { LoaderFive } from "@/components/ui/Loader";
import React from "react";

 
export default function LoaderFiveDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <LoaderFive text="Loading..." />
    </div>
  );
}
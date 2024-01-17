"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("");
  return (
    <div className={cn("h-screen w-screen", color)}>
      <div className=" bg-white shadow-md flex items-center justify-center gap-3 p-4">
        <Button className="bg-red-500" onClick={() => setColor("bg-red-500")}>
          Red
        </Button>
        <Button className="bg-blue-500" onClick={() => setColor("bg-blue-500")}>
          Blue
        </Button>
        <Button className="bg-black" onClick={() => setColor("bg-black")}>
          Black
        </Button>
        <Button
          className="bg-white text-black border border-black"
          onClick={() => setColor("bg-white")}
        >
          White
        </Button>
        <Button
          className="bg-purple-500"
          onClick={() => setColor("bg-purple-500")}
        >
          Purple
        </Button>
        <Button
          className="bg-green-500"
          onClick={() => setColor("bg-green-500")}
        >
          Green
        </Button>
        <Button
          className="bg-yellow-500"
          onClick={() => setColor("bg-yellow-500")}
        >
          Yellow
        </Button>
        <Button
          className="bg-orange-500"
          onClick={() => setColor("bg-orange-500")}
        >
          Orange
        </Button>
      </div>
    </div>
  );
};

export default ColorChanger;

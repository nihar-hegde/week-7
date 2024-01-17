import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const ProfileComponent = () => {
  return (
    <Card className="min-w-[400px] min-h-[450px] shadow-md ">
      <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 w-full min-h-[180px]"></div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"https://avatars.githubusercontent.com/u/59167599?v=4"}
          alt="profile image"
          width={120}
          height={120}
          className="rounded-full -translate-y-20 border-4"
        />
        <div className="flex gap-2 text-center">
          <CardTitle className="mt-[-60px]">Nihar Hegde</CardTitle>
          <CardDescription className="mt-[-60px]">23</CardDescription>
        </div>
        <CardDescription className="mt-[-30px] text-xl">India</CardDescription>
        <Separator className="mt-10" />
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">80K</h1>
            <h3>Followers</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">803K</h1>
            <h3>Likes</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">1.4K</h1>
            <h3>Photos</h3>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileComponent;

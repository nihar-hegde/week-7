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
import { getProfileInfo } from "@/actions/git-card";

interface Props {
  login: string;
  avatar_url: string;
  name: string;
  blog: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
}

const ProfileComponent = async () => {
  const gitProfileData: Props = await getProfileInfo();
  return (
    <Card className="min-w-[400px] min-h-[450px] shadow-md ">
      <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 w-full min-h-[180px]"></div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={gitProfileData.avatar_url}
          alt="profile image"
          width={120}
          height={120}
          className="rounded-full -translate-y-20 border-4"
        />
        <div className="flex gap-2 text-center">
          <CardTitle className="mt-[-60px]">{gitProfileData.name}</CardTitle>
          <CardDescription className="mt-[-60px]">23</CardDescription>
        </div>
        <CardDescription className="mt-[-30px] text-xl">
          {gitProfileData.location}
        </CardDescription>
        <Separator className="mt-10" />
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">{gitProfileData.followers}</h1>
            <h3>Followers</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">{gitProfileData.following}</h1>
            <h3>Following</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">
              {gitProfileData.public_repos}
            </h1>
            <h3>Public Repos</h3>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileComponent;

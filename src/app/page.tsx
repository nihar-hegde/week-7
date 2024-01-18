import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-2">
        <Link
          href={"/profile-component"}
          className={buttonVariants({ variant: "default" })}
        >
          Profile Compoent
        </Link>
        <Link
          href={"/color-changer"}
          className={buttonVariants({ variant: "default" })}
        >
          Color changer
        </Link>

        <Link
          href={"/git-card"}
          className={buttonVariants({ variant: "default" })}
        >
          Git Card
        </Link>
      </div>
    </main>
  );
}

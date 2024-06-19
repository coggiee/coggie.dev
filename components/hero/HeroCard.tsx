import Image from "next/image";
import { Network, University } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import SocialGroup from "../global/SocialGroup";

export default async function HeroCard() {
  return (
    <Card className="w-full flex-grow-0 flex-shrink-0 rounded-lg font-aritaburi relative">
      <CardContent className="flex flex-col gap-5 pt-6 ">
        <Image
          width={400}
          height={100}
          alt="profile"
          priority={true}
          src={"https://avatars.githubusercontent.com/u/101445377?v=4"}
          className="rounded-md"
        />
        <div className="flex flex-col gap-5">
          <main className="flex flex-col gap-3">
            <h1 className="text-lg leading-tight">
              <p>FE 개발자 문휘식</p>
            </h1>
            <div className="flex flex-col gap-1 text-sm">
              <span>모든 것은 나에 대한 이해로부터 나온다</span>
            </div>
          </main>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-7">
        <ul className="text-sm flex flex-col gap-2">
          <li className="flex gap-2">
            <Network className="w-4 h-4" />
            <span className="text-sm">Devcourse Frontend 5th</span>
          </li>
          <li className="flex gap-2">
            <University className="w-4 h-4" />
            <span className="text-sm">Konkuk Univ</span>
          </li>
        </ul>
        <SocialGroup />
      </CardFooter>
    </Card>
  );
}

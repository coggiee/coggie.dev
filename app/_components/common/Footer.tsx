import SocialGroup from "./SocialGroup";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col-reverse gap-2 md:flex-row justify-center items-center h-32 md:gap-5 border-t border-t-[#dbdbdb] dark:text-white dark:border-t-[#d6d6d613] ">
      <div className="text-sm font-thin">
        Copyright. 2023 Ⓒ Coggie (Moon Hwisik)
      </div>
    </footer>
  );
}

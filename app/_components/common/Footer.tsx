import SocialGroup from './SocialGroup';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col-reverse gap-2 md:flex-row justify-center items-center h-20 md:gap-5 border-t border-t-[#dbdbdb] dark:text-white dark:border-t-[#d6d6d613]'>
      <div className='text-sm font-thin'>
        Copyright. 2023 Ⓒ Coggie(Moon Hwisik)
      </div>
      <div className='flex items-center gap-5 text-black'>
        <SocialGroup
          fontSize='18px'
          display='flex'
          justify='between'
          align='center'
          gap={3}
          isGroup={false}
        />
      </div>
    </footer>
  );
};

export default Footer;

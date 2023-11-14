import Head from 'next/head';
import { Nav } from '@/app/components/Nav';

export const Container = (props: any) => {
  return (
    <>
      <Head>
        <title>내 블로그</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>
    </>
  );
};

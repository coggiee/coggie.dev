import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full min-h-full mx-auto flex flex-col dark:bg-item-dark'>
      {children}
    </div>
  );
}

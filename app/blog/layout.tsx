import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className=''>
        <div className='flex flex-col min-h-screen'>
          {children}
        </div>
      </body>
    </html>
  );
}

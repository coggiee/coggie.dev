import React from 'react';

type Props = {};

export default function Loading({}: Props) {
  return (
    <div
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'
      id='load'
    >
      <div>G</div>
      <div>N</div>
      <div>I</div>
      <div>D</div>
      <div>A</div>
      <div>O</div>
      <div>L</div>
    </div>
  );
}

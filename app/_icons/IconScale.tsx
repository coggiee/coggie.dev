// icon:software_scale_expand | Linea Iconset https://linea.io/ | Benjamin Sigidi
import * as React from 'react';

function IconScale(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 64 64'
      fill='currentColor'
      height='1em'
      width='1em'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeDasharray='4,2'
        strokeMiterlimit={10}
        strokeWidth={2}
        d='M1 28V1h62v62H36'
      />
      <path
        fill='none'
        stroke='currentColor'
        strokeMiterlimit={10}
        strokeWidth={2}
        d='M1 33h30v30H1z'
      />
      <path
        fill='none'
        stroke='currentColor'
        strokeLinejoin='bevel'
        strokeMiterlimit={10}
        strokeWidth={2}
        d='M57 18V7H46'
      />
      <path
        fill='none'
        stroke='currentColor'
        strokeMiterlimit={10}
        strokeWidth={2}
        d='M57 7L41 23'
      />
    </svg>
  );
}

export default IconScale;

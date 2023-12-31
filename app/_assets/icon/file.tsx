type FileIconProps = {
  className?: string;
};
const FileIcon = ({ className }: FileIconProps) => {
  return (
    <svg
      className={className}
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Group 63'>
        <rect
          id='Rectangle 11'
          x='1'
          y='1'
          width='12'
          height='12'
          rx='2'
          stroke='#8C43C9'
        />
        <circle
          id='Ellipse 8'
          cx='3.66862'
          cy='4.33341'
          r='0.666667'
          fill='#8C43C9'
        />
        <circle
          id='Ellipse 9'
          cx='3.66862'
          cy='6.99992'
          r='0.666667'
          fill='#8C43C9'
        />
        <circle
          id='Ellipse 10'
          cx='3.66862'
          cy='9.66667'
          r='0.666667'
          fill='#8C43C9'
        />
        <path
          id='Vector 25'
          d='M6.33203 4.33325L10.332 4.33325'
          stroke='#8C43C9'
          stroke-linecap='round'
        />
        <path
          id='Vector 26'
          d='M6.33203 7L10.332 7'
          stroke='#8C43C9'
          stroke-linecap='round'
        />
        <path
          id='Vector 27'
          d='M6.33203 9.66675L10.332 9.66675'
          stroke='#8C43C9'
          stroke-linecap='round'
        />
      </g>
    </svg>
  );
};

export default FileIcon;

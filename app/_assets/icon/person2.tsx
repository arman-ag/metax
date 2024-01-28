type person2Type = { className?: string };
const Person2Icon = ({ className }: person2Type) => {
  return (
    <svg
      className={className}
      width='16'
      height='14'
      viewBox='0 0 16 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Group 250'>
        <ellipse
          id='Ellipse 16'
          cx='8.00057'
          cy='4.21429'
          rx='3.61385'
          ry='3.71429'
          stroke='#191919'
        />
        <path
          id='Ellipse 17'
          d='M1 13.4999C1.80235 10.2959 4.63218 7.92847 8 7.92847C11.3678 7.92847 14.1976 10.2959 15 13.4999'
          stroke='#191919'
          strokeLinecap='round'
        />
      </g>
    </svg>
  );
};

export default Person2Icon;

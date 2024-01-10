type exitIconType = { classNAme?: string };
const ExitIcon = ({ className }: exitIconType) => {
  return (
    <svg
      className={className}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='icons'>
        <path
          id='Rectangle 204'
          d='M1.5 4.38889V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H13.5C14.0523 1.5 14.5 1.94772 14.5 2.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V11.7143M4.38889 11.6111L1.99976 8.62469C1.70758 8.25948 1.70758 7.74052 1.99976 7.37531L4.38889 4.38889'
          stroke='#191919'
          stroke-linecap='round'
        />
        <path
          id='Vector 50'
          d='M2.5 8L10.5 8'
          stroke='#191919'
          stroke-linecap='round'
        />
      </g>
    </svg>
  );
};

export default ExitIcon;

type PaperIconType = {
  className?: string;
};
const PaperIcon = ({ className }: PaperIconType) => {
  return (
    <svg
      className={className}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='iconamoon:news-light'>
        <g id='Group'>
          <path
            id='Vector'
            d='M2.5 3.33325V14.9999C2.5 15.4419 2.67559 15.8659 2.98816 16.1784C3.30072 16.491 3.72464 16.6666 4.16667 16.6666H15.8333C16.2754 16.6666 16.6993 16.491 17.0118 16.1784C17.3244 15.8659 17.5 15.4419 17.5 14.9999V6.66659H14.1667'
            stroke='#191919'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            id='Vector_2'
            d='M2.5 3.33325H14.1667V14.9999C14.1667 15.4419 14.3423 15.8659 14.6548 16.1784C14.9674 16.491 15.3913 16.6666 15.8333 16.6666M10.8333 6.66659H5.83333M10.8333 9.99992H7.5'
            stroke='#191919'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
      </g>
    </svg>
  );
};

export default PaperIcon;

type personIconProps = { className: string };
const PersonIcon = ({ className }: personIconProps) => {
  return (
    <svg
      className={className}
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='iconamoon:profile-light'>
        <g id='Group'>
          <path
            id='Vector'
            d='M3.33398 15.4998C3.33398 14.6158 3.68517 13.7679 4.31029 13.1428C4.93542 12.5177 5.78326 12.1665 6.66732 12.1665H13.334C14.218 12.1665 15.0659 12.5177 15.691 13.1428C16.3161 13.7679 16.6673 14.6158 16.6673 15.4998C16.6673 15.9419 16.4917 16.3658 16.1792 16.6783C15.8666 16.9909 15.4427 17.1665 15.0007 17.1665H5.00065C4.55862 17.1665 4.1347 16.9909 3.82214 16.6783C3.50958 16.3658 3.33398 15.9419 3.33398 15.4998Z'
            stroke='#222222'
            stroke-width='1.5'
            stroke-linejoin='round'
          />
          <path
            id='Vector_2'
            d='M10 8.83325C11.3807 8.83325 12.5 7.71396 12.5 6.33325C12.5 4.95254 11.3807 3.83325 10 3.83325C8.61929 3.83325 7.5 4.95254 7.5 6.33325C7.5 7.71396 8.61929 8.83325 10 8.83325Z'
            stroke='#222222'
            stroke-width='1.5'
          />
        </g>
      </g>
    </svg>
  );
};

export default PersonIcon;

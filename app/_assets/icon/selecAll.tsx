type selectAllIconType = {
  className?: string;
};
const SelectAllIcon = ({ className }: selectAllIconType) => {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='ic:baseline-photo-size-select-small'>
        <path
          id='Vector'
          d='M23 15H21V17H23V15ZM23 11H21V13H23V11ZM23 19H21V21C22 21 23 20 23 19ZM15 3H13V5H15V3ZM23 7H21V9H23V7ZM21 3V5H23C23 4 22 3 21 3ZM3 21H11V15H1V19C1 20.1 1.9 21 3 21ZM3 7H1V9H3V7ZM15 19H13V21H15V19ZM19 3H17V5H19V3ZM19 19H17V21H19V19ZM3 3C2 3 1 4 1 5H3V3ZM3 11H1V13H3V11ZM11 3H9V5H11V3ZM7 3H5V5H7V3Z'
          fill='#222222'
        />
      </g>
    </svg>
  );
};

export default SelectAllIcon;
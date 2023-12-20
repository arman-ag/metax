import searchIcon from '@/app/_assets/icon/search.svg';
import Image from 'next/image';
import { useState } from 'react';
import { SearchContainer } from './style';
export const Search = () => {
  const [enterText, setEnterText] = useState();
  return (
    <SearchContainer>
      <input
        onChange={(e) => setEnterText(e.target.value)}
        value={enterText}
        placeholder='جستجو'
      />
      <button type='submit'>
        <Image
          className='m-auto'
          src={searchIcon}
          alt='search icon'
          width={20}
          height={20}
        />
      </button>
    </SearchContainer>
  );
};

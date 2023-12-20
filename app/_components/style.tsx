import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 21.125rem;
  height: 2.06rem;
  border-radius: 1rem;
  background-color: #f7f7f9;
  input {
    flex-basis: 100%;
    border-radius: 1rem;
    outline: none;
    height: 100%;
    padding: 0 0.87rem;
    background-color: inherit;
  }
  button {
    background-color: #8c43c9;
    border-radius: 1rem 0.125rem 0.125rem 1rem;
    width: 4.062rem;
    height: 2.0625rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export { SearchContainer };

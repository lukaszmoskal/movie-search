import styled from 'styled-components';

const Search = styled.input.attrs(({ value }) => ({
  type: 'text',
  value: value
}))`
  align-self: center;
  height: 2rem;
  padding-left: 10px;
`;

export default Search;

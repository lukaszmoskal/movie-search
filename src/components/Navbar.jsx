import styled from 'styled-components';

const Navbar = styled.nav`
  align-content: center;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  position: fixed;
  width: 100%;

  @media (max-width: 640px) {
    padding: 15px;
  }
`;

export default Navbar;

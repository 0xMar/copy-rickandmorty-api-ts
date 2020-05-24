import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 60px;
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid transparent;
  z-index: 2;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  min-height: 60px;
  margin: 0px auto;
  padding: 0px 1.5rem;
  align-items: center;
  justify-content: space-between;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(51, 51, 51);
    border: medium none;
    text-decoration: none;
    background-color: transparent;
    & svg {
      fill: rgb(51, 51, 51);
    }
  }
  & ul {
    display: flex;
    margin: 0px;
    padding: 0px;
    justify-content: center;
    align-items: center;
    & li {
      margin: 0px;
      padding-left: 0;
      list-style-type: none;
      & a {
        font-weight: 700;
        & span {
          margin: 0;
          padding: 0.5rem 1rem;
          border: 1px solid rgb(255, 152, 0);
          border-radius: 0.5rem;
          font-size: 0.75rem;
          text-align: center;
          text-transform: uppercase;
          background: transparent none repeat scroll 0% 0%;
          color: rgb(51, 51, 51);
        }
        & span:hover {
          border: 1px solid transparent;
          background: rgb(255, 152, 0) none repeat scroll 0% 0%;
          color: rgb(255, 255, 255);
        }
      }
    }
    & li:not(:last-child) {
      margin-right: 1.75rem;
    }
    & li:last-child {
      margin-bottom: 0;
    }
  }
`;

import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 60px;
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid transparent;
  z-index: 2;
  .home-icon {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    & svg {
      fill: rgb(51, 51, 51);
    }
  }
  .nav-item {
    transition: all 0.1s ease 0s;
  }
  .nav-item__primary {
    font-weight: 700;
  }
  @media (max-width: 40.625em) {
    border-bottom: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  min-height: 60px;
  margin: 0px auto;
  padding: 0px 1.5rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 40.625em) {
    border-bottom: 1px solid rgba(46, 41, 51, 0.08);
  }
`;

export const AnchorItem = styled.a`
  color: rgb(51, 51, 51);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

export const HeaderList = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  justify-content: center;
  align-items: center;
  & li {
    margin: 0px;
  }
  & li:not(:last-child) {
    margin-right: 1.75rem;
  }
  & li:last-child {
    margin-bottom: 0;
  }
`;

export const HeaderButton = styled.span`
  margin: 0px;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0.5rem;
  border: 1px solid #ff9800;
  background: transparent;
  color: #333;
  transition: all 0.1s ease 0s;
  &:hover,
  &:focus {
    color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    background: rgb(255, 152, 0);
  }
  &.mobile {
    display: none;
    padding: 0.25rem 0.5rem;
  }
  @media (max-width: 40.625em) {
    &.desktop {
      display: none;
    }
    &.mobile {
      display: block;
    }
  }
`;

export const HeaderButtonMobile = styled(HeaderButton)`
  color: #fff;
  background: #ff9800;
  border: none;
  & svg {
    font-size: 16px;
    vertical-align: middle;
  }
  &:hover,
  &:focus {
    border: none;
    background: rgb(255, 173, 51) none repeat scroll 0% 0%;
  }
`;

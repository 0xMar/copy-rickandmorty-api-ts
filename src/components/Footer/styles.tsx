import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: calc(60px * 2);
  padding: 1.5rem 0px;
  color: #9e9e9e;
  background: #202329;
  .margin-top {
    margin-top: 1.25rem;
  }
  & ul li {
    margin: 0px;
  }
  & ul li + li {
    margin-left: 1.5rem;
  }
  & ul li span {
    margin: 0px;
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px;
  margin: 0px;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  .footer-icon {
    vertical-align: middle;
  }
  & span {
    margin: 0px;
  }
  & a {
    color: #9e9e9e;
    border-bottom: none;
    & :hover,
    & :focus {
      color: #ff9800;
    }
  }
`;

export const ServerStatus = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9e9e9e;
  .stats {
    margin-left: 0px;
  }
  .server-icon {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background: #55cc44;
  }
`;

export const SignWrapper = styled.div`
  & span {
    font-size: 0.75rem;
  }
  & span a {
    font-weight: 400;
    transition: color 0.2s;
    color: #f5f5f5;
    border-bottom: 1px solid #ff9800;
  }
  & span a:hover,
  span a:focus {
    color: #ff9800;
    border-bottom: none;
  }
`;

export const Caption = styled.span`
  margin: 0.25rem 0.5rem;
  font-size: 0.75rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
`;

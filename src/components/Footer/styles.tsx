import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  min-height: calc(120px);
  padding: 1.5rem 0px;
  justify-content: center;
  align-items: center;
  color: rgb(158, 158, 158);
  background: rgb(32, 35, 41) none repeat scroll 0% 0%;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  margin: 0px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  & li:not(:first-child) {
    margin-left: 1.5rem;
  }
`;

export const StatsItem = styled.li`
  margin: 0px;
  & span {
    font-size: 0.75rem;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const ServerStatus = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(158, 158, 158);
  & span {
    margin: 0.25rem 0.5rem;
    font-size: 0.75rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
  }
  & span:last-child {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background: rgb(85, 204, 68) none repeat scroll 0% 0%;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  width: 100%;
  margin: 0px;
  margin-top: 1.25rem;
  padding: 0px;
  align-items: center;
  justify-content: center;
  & li:not(:first-child) {
    margin-left: 1.5rem;
  }
  & li > a {
    color: rgb(158, 158, 158);
    border-bottom: medium none;
    & svg {
      width: 1em;
      height: 1em;
      vertical-align: middle;
      fill: currentColor;
    }
  }
`;

export const SignWrapper = styled.div`
  & span {
    font-size: 0.75rem;
    & a {
      font-weight: 400;
      color: rgb(245, 245, 245);
      border-bottom: 1px solid rgb(255, 152, 0);
    }
  }
`;

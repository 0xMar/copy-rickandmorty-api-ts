import React from 'react';
import styled from 'styled-components';

const textGray = '#9e9e9e';
const textWhite = '#ffffff';

const Status = [
  { status: 'Alive', value: '#54cc44' },
  { status: 'Dead', value: '#d63c2e' },
  { status: 'unknown', value: '#9e9e9e' },
];

interface ContentWrapperProps {
  state: string;
}

export const Card = styled.article`
  width: 600px;
  height: 220px;
  display: flex;
  margin: 0.75rem;
  overflow: hidden;
  background: rgb(60, 62, 68) none repeat scroll 0% 0%;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  @media (max-width: 40.625em) {
    width: 100%;
    height: initial;
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  flex: 2 1 0%;
  & img {
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
    @media (max-width: 40.625em) {
      height: 300px;
    }
  }
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  display: flex;
  flex-direction: column;
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: ${textWhite};
  & div:first-child {
    justify-content: flex-start;
    & span {
      display: flex;
      align-items: center;
      text-transform: capitalize;
      & span {
        height: 0.5rem;
        width: 0.5rem;
        margin-right: 0.375rem;
        background: ${(props: ContentWrapperProps): string | undefined =>
            Status.find((item) =>
              item.status === props.state ? item.value : '',
            )?.value}
          none repeat scroll 0% 0%;
        border-radius: 50%;
      }
    }
  }
  & div:nth-child(2) {
    color: ${textGray};
    @media (max-width: 40.625em) {
      margin-top: 1.25rem;
    }
  }
  & div:last-child {
    justify-content: flex-end;
    color: ${textGray};
    @media (max-width: 40.625em) {
      margin-top: 1.25rem;
    }
  }
  @media (max-width: 40.625em) {
    pointer-events: none;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: center;
  & h2 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    border-bottom: none;
    line-height: 1.1;
  }
  & a {
    background-color: transparent;
    text-decoration: none;
    color: ${textWhite};
  }
  & span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const LoadIcon = styled.svg`
  fill: rgb(255, 152, 0);
`;

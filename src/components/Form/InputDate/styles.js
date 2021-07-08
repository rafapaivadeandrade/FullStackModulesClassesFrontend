import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #24124b;
  border-radius: 10px;
  border: 2px solid #232129;
  width: 100%;
  padding: 16px;
  color: #f4ede8;
  display: flex;
  flex-direction: column;
  color: #666360;
  margin: 0px 0px 20px;
  ${(props) =>
    props.isErroed &&
    css`
      border-color: #ff7563;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #5e49ff;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #5e49ff;
    `}

 input {
    flex: 1;
    color: #fff;
    background: transparent;
    border: 0;
    outline: none;
    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled.span`
  color: #ff7563;
  height: 30px;
  span {
    background: #ff7563;
    &::before {
      border-color: #ff7563 transparent;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  height: 56px;
  width: 100%;
  background-color: rgb(37, 203, 211);
  border: 0px;
  color: rgb(240, 245, 255);
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  margin-top: 0px;

  &:hover {
  transition: all 0.3s ease 0s;
  opacity: 0.8;
  border: 1px solid rgb(37, 203, 211);
  background: transparent;
  color: rgb(37, 203, 211)
  }
`;

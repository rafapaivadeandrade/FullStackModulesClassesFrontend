import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 480px) {
    margin: 80px auto;
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    margin: auto auto;
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Content = styled.div`
  @media screen and (min-width: 480px) {
    width: 100%;
    background: transparent;
    margin-top: 50px;
    border-radius: 8px;
    padding: 30px;
    border: 1px solid rgb(94, 73, 255);
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    background: transparent;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    padding: 30px;
    border: 1px solid rgb(94, 73, 255);
  }
`;
export const Wrapper = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      margin-bottom: 24px;
      color: #25cbd3;
    }
    a {
      svg {
        margin-left: -80px;
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      text-align: center;
      margin-bottom: 24px;
      color: #25cbd3;
    }
    a {
      svg {
        margin-left: -120px;
        margin-bottom: 10px;
      }
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .line {
    width: 100%;
    height: 67px;
    border-bottom: 1px solid #fff;
  }
`;

export const Content = styled.div`
  width: 50%;

  max-width: 1440px;

  margin: 89px 0px auto;

  .containerText {
    text-align: center;
    color: #4f4f4f;

    .wrapper {
      margin-top: 89px;
      font-size: 32px;
      font-weight: 700;
    }

    .text {
      font-size: 32px;
      text-transform: uppercase;
      margin-top: 88px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 80%;
    margin: 40px 0px auto;
  }
`;

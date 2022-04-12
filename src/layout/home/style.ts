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

export const Content = styled.main`
  width: 50%;

  max-width: 1440px;

  margin: 89px 0px auto;

  .containerText {
    text-align: center;
    color: ${props => props.theme.colorText.textGray};
    margin-bottom: 37px;

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

  .wrapperMaps {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    iframe {
      width: 915px;
      height: 524px;
      border: none;
      border-radius: 16px;
      transition: box-shadow 0.3s linear;
      &:hover {
        box-shadow: ${props => props.theme.boxShadow};
      }
    }

    .address {
      width: 85%;
      font-size: 32px;
      font-weight: 500;
      margin: 32px auto auto;
      color: ${props => props.theme.colorText.textGray};
      margin-bottom: 70px;

      @media screen and (max-width: 500px) {
        font-size: 22px;
      }
    }

    .map1,
    .map2,
    .map3 {
      text-align: center;
    }
  }

  @media screen and (max-width: 769px) {
    .wrapperMaps {
      iframe {
        width: 700px;
        height: 400px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    width: 80%;
    margin: 40px 0px auto;

    .wrapperMaps {
      iframe {
        width: 350px;
        height: 400px;
      }
    }
  }
`;

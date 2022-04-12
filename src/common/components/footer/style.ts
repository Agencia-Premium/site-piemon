import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  .content {
    width: 100%;
    height: 67px;

    display: flex;
    align-items: center;
    justify-content: center;

    .wrapperTextImg {
      p {
        margin-top: 1.1rem;
        margin-right: 0.55rem;
        color: ${props => props.theme.colorText.textWhite};
        font-weight: 500;
      }
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

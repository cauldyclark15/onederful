import styled from 'styled-components';

export const Pre = styled.pre`
  background-color: rgba(155, 89, 182, 0.4);
  height: 100%;
`;

export const Samp = styled.samp`
  font-family: monospace;
  font-size: 14px;
  line-height: 1.4;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;

  @media only screen and (max-width: 1080px) {
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
  }

  div.screen {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }

  div.form {
    flex: 7;
    margin-left: 7px;
    margin-right: 3.5px;
  }

  div.result {
    flex: 15;
    margin-right: 7px;
    margin-left: 3.5px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  height: 100%;
  box-shadow: 3px 4px 10px #aaaaaa;
  border: 1px solid #f8f8f8;
  overflow: auto;
  background: #fff;

  form {
    padding-right: 85px;

    @media only screen and (max-width: 1700px) {
      padding-right: 70px;
    }

    @media only screen and (max-width: 1600px) {
      padding-right: 55px;
    }

    @media only screen and (max-width: 1440px) {
      padding-right: 35px;
    }

    @media only screen and (max-width: 1250px) {
      padding-right: 10px;
    }

    @media only screen and (max-width: 1080px) {
      padding-right: 0px;
    }
  }
`;

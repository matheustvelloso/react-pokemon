import styled from 'styled-components';

export const HeaderBackground = styled.div`
  box-shadow: rgb(1 28 64 / 10%) 4px 4px 16px;
  height: 120px;
  margin-bottom: 30px;
  padding: 20px;
`;

export const HeaderBackgroundMobile = styled.div`
  background-color: #494949;
  height: 154px;
  border-radius: 0 0 24px 24px;
  margin-bottom: 30px;
`;

export const SpanTextHeader = styled.span`
  font-family: Inter;
  font-weight: 300;
  font-size: 16px;
  line-height: 24.2px;
  color: #fff;
`;

export const ParagraphTextHeader = styled.p`
  font-family: Inter;
  font-style: Mixed;
  font-size: 20px;
  line-height: 24px;
  line-height: 100%;
  align-content: Left;
  vertical-align: Top;
  font-weight: 600px;
  color: #fff;
`;

export const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  img {
    border-radius: 10px;
  }
`;

export const SpanTime = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

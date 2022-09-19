import { memo } from 'react';

import { Container } from 'react-bootstrap';
import {
  MdSignalCellular3Bar,
  MdSignalWifiStatusbar4Bar,
  MdBatteryFull,
} from 'react-icons/md';

import emoji from 'assets/emoji.png';
import imageHeader from 'assets/imageHeader.png';
import pokeTrainer from 'assets/pokeTrainer.jpeg';

import {
  HeaderBackground,
  HeaderBackgroundMobile,
  ImgContainer,
  MobileContainer,
  ParagraphTextHeader,
  SpanTextHeader,
  SpanTime,
} from './styles';

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header>
      <HeaderBackgroundMobile className="d-block d-md-none">
        <MobileContainer>
          <SpanTime>9:41</SpanTime>
          <div>
            <MdSignalCellular3Bar className="mx-1" />
            <MdSignalWifiStatusbar4Bar className="mx-1" />
            <MdBatteryFull className="mx-1" />
          </div>
        </MobileContainer>
        <Container>
          <div className="d-flex justify-content-between">
            <div>
              <ParagraphTextHeader>
                <SpanTextHeader>Hello</SpanTextHeader>, Matheus Velloso
              </ParagraphTextHeader>
              <SpanTextHeader>Welcome! </SpanTextHeader>
              <img src={emoji} alt="Emoji" />
            </div>
            <ImgContainer>
              <img
                className="img-fluid"
                src={pokeTrainer}
                alt="Matheus Velloso"
              />
            </ImgContainer>
          </div>
        </Container>
      </HeaderBackgroundMobile>
      <HeaderBackground className="d-none d-md-block">
        <Container>
          <img src={imageHeader} alt="Pokemon" />
        </Container>
      </HeaderBackground>
    </header>
  );
};

export default memo(Header);
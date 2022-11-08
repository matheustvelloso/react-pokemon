import { GiMale } from 'react-icons/gi';
import { RiHeartLine } from 'react-icons/ri';
import { TbGenderHermaphrodite } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PokemonColor } from 'types/PokemonType';

interface IHeaderContainerProps {
  backgroundColor: PokemonColor;
}
interface ISpanPokemonId {
  color: string;
}
interface ISpanPokemonName {
  color: string;
}
interface ISpanTypesProps {
  color: string;
}
interface ISpanDescriptionProps {
  color: PokemonColor;
}

export const HeaderContainer = styled.div<IHeaderContainerProps>`
  padding: 20px 0;
  height: 300px;
  margin-bottom: -270px;
  @media (max-width: 767px) {
    margin-bottom: -150px;
  }
  @media (max-width: 576px) {
    margin-bottom: -80px;
  }
  justify-content: space-between;
  box-shadow: rgb(1 28 64 / 10%) 4px 4px 16px;
  background-color: ${({ backgroundColor, theme }) =>
    theme.colors.pokemon?.[backgroundColor].background || '#000'};
`;

export const SpanPokemonId = styled.span<ISpanPokemonId>`
  font-family: Inter;
  font-weight: 700;
  font-style: Bold;
  font-size: 18px;
  line-height: 22px;
  line-height: 100%;
  align-content: Right;
  vertical-align: Center;
  color: ${({ color }) => (color === 'white' ? '#000' : '#fff')};
`;

export const SpanPokemonName = styled.span<ISpanPokemonName>`
  font-family: Inter;
  font-style: Medium;
  font-size: 36px;
  line-height: 44px;
  line-height: 100%;
  align-content: Left;
  vertical-align: Center;
  font-weight: 500;
  color: ${({ color }) => (color === 'white' ? '#000' : '#fff')};
`;

export const SpanTypes = styled.span<ISpanTypesProps>`
  background: ${({ color }) =>
    color === 'white' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.4)'};
  background-blend-mode: soft-light;
  border-radius: 38px;
  width: fit-content;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  padding: 6px 12px;
  color: ${({ color }) => (color === 'white' ? '#000' : '#fff')};
  margin: 0 5px;
  font-family: Inter;
  font-style: Regular;
  font-size: 12px;
  line-height: 28px;
  line-height: 193%;
  align-content: Center;
  vertical-align: Top;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 400px;
    @media (max-width: 767px) {
      max-width: 220px;
    }
    @media (max-width: 576px) {
      max-width: 120px;
    }
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const SpanDescription = styled.span<ISpanDescriptionProps>`
  font-family: Inter;
  font-style: Bold;
  font-size: 20px;
  line-height: 16px;
  line-height: 66%;
  align-content: Center;
  vertical-align: Center;
  font-weight: 700;
  color: ${({ color, theme }) =>
    theme.colors.pokemon?.[color].background === '#fff'
      ? '#000'
      : theme.colors.pokemon?.[color].background};
`;

export const ListStats = styled.ul`
  font-weight: 500;
  font-family: Inter;
  font-style: Medium;
  font-size: 14px;
  line-height: 28px;
  align-content: Left;
  vertical-align: Center;
  list-style: none;
  li {
    margin-bottom: 7px;
  }
`;
export const SpanGender = styled.span`
  font-weight: 500;
  font-family: Inter;
  font-style: Medium;
  font-size: 14px;
  line-height: 28px;
  align-content: Left;
  vertical-align: Center;
  list-style: none;
  color: #212121;
`;

export const SpanGenderPercentage = styled.span`
  font-family: Inter;
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  line-height: 17px;
  line-height: 100%;
  align-content: Center;
  vertical-align: Center;
  color: #303943;
`;

export const PokeInfoContainer = styled.div`
  border-right: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  height: 48px;
  padding: 0 26px;
`;

export const SpanCharacteristics = styled.span`
  font-weight: 700;
  font-family: Inter;
  font-style: Medium;
  font-size: 16px;
  line-height: 28px;
  line-height: 145%;
  align-content: Left;
  vertical-align: Center;
  color: #303943;
  padding-bottom: 20px;
`;

export const SpanPokeInfo = styled.span`
  font-family: Inter;
  font-style: Medium;
  font-size: 14px;
  line-height: 16px;
  line-height: 94%;
  align-content: Justified;
  vertical-align: Center;
  font-weight: 500;
  color: #212121;
`;

export const ParagraphPokeInfo = styled.p`
  font-weight: 400;
  font-family: Inter;
  font-style: Regular;
  font-size: 10px;
  line-height: 12px;
  line-height: 99%;
  align-content: Center;
  vertical-align: Center;
  color: #767676;
  margin-top: 10px;
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  color: #fff;
`;
export const HeartIcon = styled(RiHeartLine)`
  font-size: 26px;
`;

export const LinkHome = styled(Link)`
  color: #fff;
  font-size: 26px;

  &:hover {
    color: #fff;
  }
`;

export const MaleIcon = styled(GiMale)`
  font-style: Solid;
  font-size: 18px;
  line-height: 16px;
  line-height: 100%;
  align-content: Center;
  vertical-align: Center;
  font-weight: 900;
  color: #6c79db;
`;
export const FemaleIcon = styled(TbGenderHermaphrodite)`
  font-style: Solid;
  font-size: 20px;
  line-height: 16px;
  line-height: 100%;
  align-content: Center;
  vertical-align: Center;
  font-weight: 900;
  color: #f0729f;
`;

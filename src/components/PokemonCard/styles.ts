import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PokemonColor } from 'types/PokemonType';

interface IContainerProps {
  backgroundColor: PokemonColor;
}
interface ISpanIndexProps {
  color: string;
}
interface ISpanTypeProps {
  color: string;
}
interface ILinkPokemonProps {
  color: string;
}
export const LinkPokemon = styled(Link)<ILinkPokemonProps>`
  text-decoration: none;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  color: ${({ color, theme }) => theme.colors.pokemon[color].name};
  &:hover {
    color: ${({ color }) => (color === 'white' ? '#000' : '#fff')};
  }
`;
export const Container = styled.div<IContainerProps>`
  padding: 16px;
  margin: 15px 0;
  border-radius: 20px;
  min-height: 190px;
  flex: 1;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  box-shadow: rgb(1 28 64 / 10%) 4px 4px 16px;
  background-color: ${({ backgroundColor, theme }) =>
    theme.colors.pokemon?.[backgroundColor].background || '#000'};
  img {
    max-width: 100px;
  }
`;
export const PokemonName = styled.span`
  font-family: Inter, sans-serif;
  font-style: Bold;
  font-weight: 600;
  font-size: 18px;
  line-height: 14px;
  line-height: 83%;
  vertical-align: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SpanIndex = styled.span<ISpanIndexProps>`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${({ color, theme }) => theme.colors.pokemon[color].id};
`;
export const SpanType = styled.span<ISpanTypeProps>`
  background: ${({ color }) =>
    color === 'white' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.4)'};
  background-blend-mode: soft-light;
  border-radius: 38px;
  display: flex;

  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 6px 12px;
  color: ${({ color }) => (color === 'white' ? '#000' : '#fff')};
  margin: 10px 0;
`;

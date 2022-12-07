import { memo, useCallback, useMemo } from 'react';

import { Container, ProgressBar } from 'react-bootstrap';
import { FaRulerVertical } from 'react-icons/fa';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { RiScales2Line } from 'react-icons/ri';

import logoPokedex from 'assets/logoPokedex.png';

import { PokemonType } from 'types/PokemonType';

import {
  FemaleIcon,
  HeaderContainer,
  HeartIcon,
  ImgContainer,
  InfoContainer,
  LinkHome,
  ListStats,
  MaleIcon,
  MobileContainer,
  ParagraphPokeInfo,
  PokeInfoContainer,
  SpanCharacteristics,
  SpanDescription,
  SpanGender,
  SpanGenderPercentage,
  SpanPokeInfo,
  SpanPokemonId,
  SpanPokemonName,
  SpanTypes,
} from './styles';

interface IPokeCardProps {
  poke: PokemonType;
}

const PokeCard: React.FC<IPokeCardProps> = ({ poke }) => {
  const getPokedexIndex = (id: number): string =>
    `#${String(id).padStart(3, '0')}`;

  const capitalizeString = useCallback((name: string) => {
    const str = name;
    const capitalized = str[0].toUpperCase() + str.substring(1);
    return capitalized;
  }, []);

  const totalStatsValue = useMemo(() => {
    return poke?.stats
      ?.map(({ value }) => value)
      ?.reduce((stat, prev) => prev + stat, 0);
  }, [poke.stats]);

  const genderRate = useCallback(
    (number: number) => (number >= 0 ? (number * 100) / 8 : 0),
    [],
  );

  return (
    <>
      <HeaderContainer backgroundColor={poke.specy.color.name}>
        <MobileContainer className="d-flex d-md-none">
          <LinkHome to="/">
            <MdOutlineArrowBackIosNew />
          </LinkHome>
          <HeartIcon />
        </MobileContainer>
        <LinkHome className="px-3 d-none d-md-flex" to="/">
          <MdOutlineArrowBackIosNew />
        </LinkHome>
        <Container>
          <div className="d-flex justify-content-between">
            <div>
              <SpanPokemonName color={poke.specy.color.name}>
                {capitalizeString(poke.name)}
              </SpanPokemonName>
              <div className="mt-3">
                {poke.types.data.map((type) => (
                  <SpanTypes color={poke.specy.color.name} key={type.type.name}>
                    {capitalizeString(type.type.name)}
                  </SpanTypes>
                ))}
              </div>
            </div>
            <SpanPokemonId color={poke.specy.color.name}>
              {getPokedexIndex(poke.id)}
            </SpanPokemonId>
          </div>
        </Container>
      </HeaderContainer>
      <Container>
        <ImgContainer>
          <img
            className="img-fluid"
            src={poke.image ? poke.image : logoPokedex}
            alt={poke.name}
          />
        </ImgContainer>
        <div className="mb-5">
          <SpanDescription color={poke.specy.color.name}>
            Description
          </SpanDescription>
        </div>
        <div className="mt-5 mb-5">
          {poke.specy.descriptions.map((description) => (
            <p key={description.text}>{description.text}</p>
          ))}
        </div>

        <InfoContainer>
          <div className="px-3 ">
            <div style={{ whiteSpace: 'nowrap' }}>
              <RiScales2Line />
              <SpanPokeInfo className="px-1">{`${
                poke.weight / 10
              } kg`}</SpanPokeInfo>
            </div>
            <ParagraphPokeInfo>Weight</ParagraphPokeInfo>
          </div>
          <PokeInfoContainer>
            <div style={{ whiteSpace: 'nowrap' }}>
              <FaRulerVertical />
              <SpanPokeInfo className="px-1">{`${
                poke.height / 10
              } m`}</SpanPokeInfo>
            </div>
            <ParagraphPokeInfo>Height</ParagraphPokeInfo>
          </PokeInfoContainer>
          <div className="px-3">
            <div style={{ whiteSpace: 'nowrap' }}>
              <SpanPokeInfo>
                {poke.moves[0].move.name &&
                  capitalizeString(poke.moves[0].move.name).replace('-', ' ')}
              </SpanPokeInfo>
            </div>
            <ParagraphPokeInfo>Major Move</ParagraphPokeInfo>
          </div>
        </InfoContainer>
        <div className="mb-3">
          <SpanCharacteristics>Characteristics</SpanCharacteristics>
        </div>
        <div className="d-flex pb-3">
          <SpanGender>Gender</SpanGender>
          <div className="px-3">
            <MaleIcon />
            <SpanGenderPercentage className="px-2">
              {poke.specy.gender_rate !== -1
                ? 100 - genderRate(poke.specy.gender_rate)
                : 0}
              %
            </SpanGenderPercentage>
          </div>
          <div>
            <FemaleIcon />
            <SpanGenderPercentage className="px-2">
              {genderRate(poke.specy.gender_rate)}%
            </SpanGenderPercentage>
          </div>
        </div>
        <table className="table">
          <tbody>
            <ListStats>
              <td className="w-20">
                {capitalizeString(poke.stats[0].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[0].value}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[0].value >= 50 ? 'success' : 'danger'}
                  now={poke.stats[0].value}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>
                {capitalizeString(poke.stats[1].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[1].value}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[1].value >= 50 ? 'success' : 'danger'}
                  now={poke.stats[1].value}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>
                {capitalizeString(poke.stats[2].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[2].value}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[2].value >= 50 ? 'success' : 'danger'}
                  now={poke.stats[2].value}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>
                {capitalizeString(poke.stats[3].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[3].value}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[3].value >= 50 ? 'success' : 'danger'}
                  now={poke.stats[3].value}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>
                {capitalizeString(poke.stats[4].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[4].value}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[4].value >= 50 ? 'success' : 'danger'}
                  now={poke.stats[4].value}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>
                {capitalizeString(poke.stats[5].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[5].value}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[5].value >= 50 ? 'success' : 'danger'}
                  now={poke.stats[5].value}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>Total</td>
              <td>{totalStatsValue}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar variant="info" now={totalStatsValue / 6} />
              </td>
            </ListStats>
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default memo(PokeCard);

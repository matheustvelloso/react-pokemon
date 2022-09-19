import { memo, useCallback, useMemo } from 'react';

import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { FaRulerVertical } from 'react-icons/fa';
import {
  MdSignalCellular3Bar,
  MdSignalWifiStatusbar4Bar,
  MdBatteryFull,
  MdOutlineArrowBackIosNew,
} from 'react-icons/md';
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
  SpanTime,
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
        <MobileContainer className="d-md-none">
          <SpanTime>9:41</SpanTime>
          <div>
            <MdSignalCellular3Bar className="mx-1" />
            <MdSignalWifiStatusbar4Bar className="mx-1" />
            <MdBatteryFull className="mx-1" />
          </div>
        </MobileContainer>
        <Container>
          <MobileContainer className="d-flex d-md-none">
            <LinkHome to="/">
              <MdOutlineArrowBackIosNew />
            </LinkHome>
            <HeartIcon />
          </MobileContainer>
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
          <div className="px-3">
            <RiScales2Line />
            <SpanPokeInfo>{`${poke.weight / 10} kg`}</SpanPokeInfo>
            <ParagraphPokeInfo>Weight</ParagraphPokeInfo>
          </div>
          <PokeInfoContainer>
            <FaRulerVertical />
            <SpanPokeInfo>{`${poke.height / 10} m`}</SpanPokeInfo>
            <ParagraphPokeInfo>Altura</ParagraphPokeInfo>
          </PokeInfoContainer>
          <div className="px-3">
            <SpanPokeInfo>
              {poke.moves[0].move.name &&
                capitalizeString(poke.moves[0].move.name).replace('-', ' ')}
            </SpanPokeInfo>
            <ParagraphPokeInfo>Major Move</ParagraphPokeInfo>
          </div>
        </InfoContainer>
        <div className="mb-3">
          <SpanCharacteristics>Your Characteristics</SpanCharacteristics>
        </div>
        <div className="d-flex">
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
        <Row>
          <ListStats className="d-flex">
            <Col>
              {poke.stats.map((stats, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={i}>
                  {capitalizeString(stats.stat.name).replace('-', ' ')}
                </li>
              ))}
              <li>Total</li>
            </Col>
            <Col>
              {poke.stats.map((stats, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={i}>{stats.value}</li>
              ))}
              <li>{totalStatsValue}</li>
            </Col>
            <Col>
              {poke.stats.map((stats, i) => (
                <li>
                  <ProgressBar
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    variant={stats.value >= 50 ? 'success' : 'danger'}
                    now={stats.value}
                  />
                </li>
              ))}
              <li>
                <ProgressBar variant="info" now={totalStatsValue / 6} />
              </li>
            </Col>
          </ListStats>
        </Row>
      </Container>
    </>
  );
};

export default memo(PokeCard);

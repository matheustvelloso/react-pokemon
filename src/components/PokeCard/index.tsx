import { memo, useCallback, useMemo } from 'react';

import { Container, ProgressBar } from 'react-bootstrap';
import { FaRulerVertical } from 'react-icons/fa';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { RiScales2Line } from 'react-icons/ri';

import { SpeciesType } from 'hooks/usePokemon';

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
  species: SpeciesType;
}

const PokeCard: React.FC<IPokeCardProps> = ({ poke, species }) => {
  const getPokedexIndex = (id: number): string =>
    `#${String(id).padStart(3, '0')}`;

  const capitalizeString = useCallback((name: string) => {
    const str = name;
    const capitalized = str[0].toUpperCase() + str.substring(1);
    return capitalized;
  }, []);

  const totalStatsValue = useMemo(() => {
    return poke?.stats
      ?.map(({ base_stat: baseStat }) => baseStat)
      ?.reduce((stat, prev) => prev + stat, 0);
  }, [poke.stats]);

  const genderRate = useCallback(
    (number: number) => (number >= 0 ? (number * 100) / 8 : 0),
    [],
  );

  return (
    <>
      <HeaderContainer backgroundColor={species?.color?.name}>
        <MobileContainer className="d-flex d-md-none">
          <LinkHome to="/" color={species?.color?.name}>
            <MdOutlineArrowBackIosNew />
          </LinkHome>
          <HeartIcon />
        </MobileContainer>
        <LinkHome
          className="px-3 d-none d-md-flex"
          to="/"
          color={species?.color?.name}
        >
          <MdOutlineArrowBackIosNew />
        </LinkHome>
        <Container>
          <div className="d-flex justify-content-between">
            <div>
              <SpanPokemonName color={species?.color?.name}>
                {capitalizeString(poke.name)}
              </SpanPokemonName>
              <div className="mt-3">
                {poke.types.map((type) => (
                  <SpanTypes color={species?.color?.name} key={type.type.name}>
                    {capitalizeString(type.type.name)}
                  </SpanTypes>
                ))}
              </div>
            </div>
            <SpanPokemonId color={species?.color?.name}>
              {getPokedexIndex(poke.id)}
            </SpanPokemonId>
          </div>
        </Container>
      </HeaderContainer>
      <Container>
        <ImgContainer>
          <img
            className="img-fluid"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
            alt={poke.name}
          />
        </ImgContainer>
        <div className="mb-5">
          <SpanDescription color={species?.color?.name}>
            Description
          </SpanDescription>
        </div>
        <div className="mt-5 mb-5">
          {species.form_descriptions.map((description) => (
            <p key={description.description}>{description.description}</p>
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
              {species.gender_rate !== -1
                ? 100 - genderRate(species.gender_rate)
                : 0}
              %
            </SpanGenderPercentage>
          </div>
          <div>
            <FemaleIcon />
            <SpanGenderPercentage className="px-2">
              {genderRate(species.gender_rate)}%
            </SpanGenderPercentage>
          </div>
        </div>
        <table className="table">
          <tbody>
            <ListStats>
              <td className="w-20">
                {capitalizeString(poke.stats[0].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[0].base_stat}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[0].base_stat >= 50 ? 'success' : 'danger'}
                  now={poke.stats[0].base_stat}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>
                {capitalizeString(poke.stats[1].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[1].base_stat}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[1].base_stat >= 50 ? 'success' : 'danger'}
                  now={poke.stats[1].base_stat}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>
                {capitalizeString(poke.stats[2].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[2].base_stat}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[2].base_stat >= 50 ? 'success' : 'danger'}
                  now={poke.stats[2].base_stat}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>
                {capitalizeString(poke.stats[3].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[3].base_stat}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[3].base_stat >= 50 ? 'success' : 'danger'}
                  now={poke.stats[3].base_stat}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>
                {capitalizeString(poke.stats[4].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[4].base_stat}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[4].base_stat >= 50 ? 'success' : 'danger'}
                  now={poke.stats[4].base_stat}
                />
              </td>
            </ListStats>
            <ListStats>
              <td>
                {capitalizeString(poke.stats[5].stat.name).replace('-', ' ')}
              </td>
              <td>{poke.stats[5].base_stat}</td>
              <td style={{ padding: '11px' }}>
                <ProgressBar
                  variant={poke.stats[5].base_stat >= 50 ? 'success' : 'danger'}
                  now={poke.stats[5].base_stat}
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

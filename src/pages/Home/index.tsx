import { memo, useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';

import Header from 'components/Header';
import Loader from 'components/Loader';
import PokemonCard from 'components/PokemonCard';

import usePokemons from 'hooks/usePokemons';
import useTitle from 'hooks/useTitle';

const Home: React.FC = () => {
  const { i18n } = useTranslation();
  const setTitle = useTitle();

  const { pokemons, loading, hasMorePages, fetchNextPage } = usePokemons();

  useEffect(() => {
    setTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage]);

  return (
    <>
      <Header />
      <Container>
        <h1>Which pokemon would you choose?</h1>
        {loading && pokemons.length === 0 && <Loader />}
        {Array.isArray(pokemons) && (
          <main>
            <InfiniteScroll
              dataLength={pokemons.length}
              next={fetchNextPage}
              hasMore={hasMorePages}
              loader={<Loader />}
              style={{ overflow: 'visible' }}
            >
              <Row className="row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
                {pokemons.map((pokemon) => (
                  <Col key={pokemon.name}>
                    <PokemonCard poke={pokemon} />
                  </Col>
                ))}
              </Row>
            </InfiniteScroll>
          </main>
        )}
      </Container>
    </>
  );
};

export default memo(Home);

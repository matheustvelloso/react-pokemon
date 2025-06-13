import { memo, useCallback, useEffect } from 'react';

import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import PokeCard from 'components/PokeCard';

import usePokemon from 'hooks/usePokemon';
import useTitle from 'hooks/useTitle';

const Pokemon: React.FC = () => {
  const { i18n } = useTranslation();
  const setTitle = useTitle();

  const { name } = useParams();

  const { pokemon, loading, species } = usePokemon(name);

  const capitalizeString = useCallback((_name: string) => {
    const str = _name;
    const capitalized = str[0].toUpperCase() + str.substring(1);
    return capitalized;
  }, []);

  useEffect(() => {
    if (name) setTitle(t(capitalizeString(name)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main>
          {pokemon && species && <PokeCard poke={pokemon} species={species} />}
        </main>
      )}
    </>
  );
};

export default memo(Pokemon);

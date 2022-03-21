import { useContext, useDebugValue } from 'react';
import { CountriesContext } from '~src/context';

function useCountries() {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error(`useCountries must be used within a CountriesProvider`);
  }

  const { error, loading, countries, setCountries } = context;
  useDebugValue(countries, (countries) =>
    countries?.length ? 'Countries Fetched' : 'No Countries To Show'
  );

  return { error, loading, countries, setCountries };
}

export { useCountries };

import PropTypes from 'prop-types';
import { useState } from 'react';
export const CountryList = ({ countries, onSelectCountry }) => {

  const [visibleCountries, setVisibleCountries] = useState(9); // Mostrar inicialmente 9 países

  const loadMoreCountries = () => {
    setVisibleCountries(prev => prev + 9); // Mostrar 9 países más al hacer clic en "Load More"
  };

  if (!countries || countries.length === 0) {
    return <div className="w-1/3 overflow-y-scroll h-screen">No countries found.</div>;
  }
  return (
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {countries.slice(0, visibleCountries).map(country => (
          <div 
            key={country.cca3}
            className="border rounded-lg shadow-lg p-4 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white"
            onClick={() => onSelectCountry(country)}
          >
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              className="w-[100px] h-[100px] mx-auto mb-2"
            />
            <h3 className="text-center font-bold text-sky-500">{country.name.common}</h3>
          </div>
        ))}
      </div>
      {countries.length > visibleCountries && (
        <div className="flex justify-center mt-4 ">
          <button onClick={loadMoreCountries} >
          </button>
        </div>
      )}
    </div>
  )
}

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    cca3: PropTypes.string.isRequired,
    flags: PropTypes.shape({
      svg: PropTypes.string.isRequired
    }).isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired
    }).isRequired,
    capital: PropTypes.arrayOf(PropTypes.string),
    languages: PropTypes.object,
    currencies: PropTypes.object,
    region: PropTypes.string.isRequired,
    subregion: PropTypes.string,
    states: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,
  onSelectCountry: PropTypes.func.isRequired
};
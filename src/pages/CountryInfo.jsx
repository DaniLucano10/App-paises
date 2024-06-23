import PropTypes from 'prop-types';
export const CountryInfo = ({ country, onClose }) => {
  if (!country) {
    return <div className="w-2/3 p-4 border-l">Select a country to see the details.</div>;
  }
  return (
    <div className=" p-4">
      <div className="border rounded-lg shadow-lg p-4 relative bg-white ">
        <button
          className="absolute top-2 right-2 text-gray-950"
          onClick={onClose}
        >
          &#x2715;
        </button>
        <div className="mb-4">
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="w-32 h-20 mx-auto mb-2"
          />
          <h2 className="text-xl font-bold text-center mb-2 text-sky-500 ">{country.name.common}</h2>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Informacion general</h3>
          <p><strong className='text-sky-500'>Capital:</strong> {country.capital ? country.capital.join(', ') : 'N/A'}</p>
          <p><strong className='text-sky-500'>Region:</strong> {country.region}</p>
          <p><strong className='text-sky-500'>Subregion:</strong> {country.subregion ? country.subregion : 'N/A'}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Idiomas</h3>
          <ul>
            {country.languages ? Object.values(country.languages).map((language, index) => (
              <li className='text-sky-500 font-bold' key={index}>{language}</li>
            )) : <li>N/A</li>}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Monedas</h3>
          <ul>
            {country.currencies ? Object.values(country.currencies).map((currency, index) => (
              <li className='text-sky-500 font-bold' key={index}>{currency.name} ({currency.symbol})</li>
            )) : <li>N/A</li>}
          </ul>
        </div>
        {country.states && (
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">States</h3>
            <ul>
              {country.states.map((state, index) => (
                <li key={index}>{state}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

  )
}

CountryInfo.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired
    }).isRequired,
    flags: PropTypes.shape({
      svg: PropTypes.string.isRequired
    }).isRequired,
    capital: PropTypes.arrayOf(PropTypes.string),
    languages: PropTypes.object,
    currencies: PropTypes.object,
    region: PropTypes.string.isRequired,
    subregion: PropTypes.string,
    states: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onClose: PropTypes.func.isRequired
};
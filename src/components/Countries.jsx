import axios from "axios";
import { useEffect, useState } from "react";
import { CountryList } from "../pages/CountryList";
import { CountryInfo } from "../pages/CountryInfo";
import Select from 'react-select';
const continents = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
];

export const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [continent, setContinent] = useState(null);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
                setFilteredCountries(response.data);
            });
    }, []);

    useEffect(() => {
        let filtered = countries.filter(country =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
        );
        if (continent) {
            filtered = filtered.filter(country =>
                country.continents.includes(continent.value)
            );
        }
        setFilteredCountries(filtered);
    }, [search, continent, countries]);
    const handleCloseCountryInfo = () => {
        setSelectedCountry(null);
    };
    return (
        <div className="container max-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Countries </h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="border rounded p-2 flex-grow mr-4"
                    placeholder="Search countries..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Select
                    options={continents}
                    className="w-1/3"
                    onChange={setContinent}
                    isClearable
                    placeholder="Filter by continent"
                />
            </div>
            <div className="flex">
                <CountryList
                    countries={filteredCountries}
                    onSelectCountry={setSelectedCountry}
                />
                {selectedCountry && (
                    <CountryInfo
                        country={selectedCountry}
                        onClose={handleCloseCountryInfo}
                    />
                )}
            </div>
        </div>
    )
}

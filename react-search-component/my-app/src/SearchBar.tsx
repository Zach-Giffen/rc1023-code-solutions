import { SetStateAction, useState } from 'react';

interface Props {
  quotes: string[];
}

export function SearchBar({ quotes }: Props) {
  const [search, setSearch] = useState('');
  const filteredQuotes = quotes.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    console.log(searchTerm);

    console.log(filteredQuotes);
  };

  return (
    <div>
      <input
        placeholder="search"
        value={search}
        onChange={handleSearchChange}></input>
      <ul>
        {filteredQuotes.length === 0 ? (
          <div>No matching items</div>
        ) : (
          filteredQuotes.map((quote, index) => <li key={index}>{quote}</li>)
        )}
      </ul>
    </div>
  );
}

import React from "react";

function Search({searchTextBox, setSearchTextBox}) {
  // React state(s)
  // const [searchTextBox, setSearchTextBox] = useState('');

  // Event Handler: Make search text box a controlled input
  function handleSearchChange(e) {
    setSearchTextBox(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          placeholder='Search for Pokemon'
          value={searchTextBox}
          onChange={handleSearchChange}
        />
        <i className="search icon"/>
      </div>
    </div>
  );
}

export default Search;

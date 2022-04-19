import { useState } from "react";

const Mode = ({
  setDisplayMode,
  languages,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const [searchedLang, setSearchedLang] = useState("");

  const languageFilter = languages.filter((language) =>
    language.toLowerCase().startsWith(searchedLang.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchedLang(e.target.value);
  };

  const handleClick = (e) => {
    setSelectedLanguage(e.target.textContent);
    setDisplayMode(null);
  };

  return (
    <div className="list">
      <div className="search-tab">
        <input value={searchedLang} onChange={handleChange} />
        <div className="btn-close" onClick={() => setDisplayMode(null)}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </div>
      <div className="option-container">
        <ul>
          {languageFilter?.map((languageFilter, _index) => (
            <div className="list-languages">
              <div className="icon">
                {selectedLanguage === languageFilter ? "✓" : ""}
              </div>
              <li
                key={_index}
                onClick={handleClick}
                style={{
                  color: selectedLanguage === languageFilter ? "#8ab4f8" : null,
                }}
              >
                {languageFilter}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mode;

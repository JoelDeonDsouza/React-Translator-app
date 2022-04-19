const Selector = ({ selectedLanguage, category, setDisplayMode }) => {
  return (
    <div className="select-down" onClick={() => setDisplayMode(category)}>
      <input value={selectedLanguage} />
      <div className="down-pointer">
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 25"
        >
          {/* <path d="M7 10l5 5 5-5z"></path> */}
        </svg>
      </div>
    </div>
  );
};

export default Selector;

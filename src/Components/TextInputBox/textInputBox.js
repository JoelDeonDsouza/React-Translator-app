//Import components//
import Selector from "../Selector/selector";

const TextInputBox = ({
  category,
  selectedLanguage,
  setDisplayMode,
  setTextTranslate,
  translatedText,
  textTranslate,
  setTranslatedText,
}) => {
  const handleClick = () => {
    setTextTranslate("");
    setTranslatedText("");
  };
  return (
    <div className={category}>
      <Selector
        selectedLanguage={selectedLanguage}
        setDisplayMode={setDisplayMode}
        category={category}
      />
      <textarea
        placeholder={category === "input" ? "Enter Text" : "Translation"}
        disabled={category === "output"}
        onChange={(e) => setTextTranslate(e.target.value)}
        value={category === "input" ? textTranslate : translatedText}
      />
      {category === "input" && (
        <div className="delete" onClick={handleClick}>
          ✕
        </div>
      )}
    </div>
  );
};

export default TextInputBox;

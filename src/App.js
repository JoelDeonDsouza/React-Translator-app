import { useState, useEffect } from "react";
//imports from Components//
import BTN from "./Components/BTN/btn";
import Direct from "./Components/Direct/direct";
import Mode from "./Components/Mode/mode";
import TextInputBox from "./Components/TextInputBox/textInputBox";
import axios from "axios";

function App() {
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("German");
  const [displayMode, setDisplayMode] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [textTranslate, setTextTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const getLanguages = async () => {
    const response = await axios("http://localhost:8000/languages");
    setLanguages(response.data);
  };

  useEffect(() => {
    getLanguages();
  }, []);

  const translate = async () => {
    console.log(translate);
    const data = {
      textTranslate,
      outputLanguage,
      inputLanguage,
    };
    const response = await axios("http://localhost:8000/translation", {
      params: data,
    });
    setTranslatedText(response.data);
  };

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };

  return (
    <div className="app">
      {!displayMode && (
        <>
          <TextInputBox
            selectedLanguage={inputLanguage}
            category="input"
            setDisplayMode={setDisplayMode}
            textTranslate={textTranslate}
            setTextTranslate={setTextTranslate}
            setTranslatedText={setTranslatedText}
          />
          <div className="directContainer" onClick={handleClick}>
            <Direct />
          </div>
          <TextInputBox
            selectedLanguage={outputLanguage}
            category="output"
            setDisplayMode={setDisplayMode}
            translatedText={translatedText}
          />
          <div className="button-container" onClick={translate}>
            <BTN />
          </div>
        </>
      )}
      {displayMode && (
        <Mode
          languages={languages}
          setDisplayMode={setDisplayMode}
          selectedLanguage={
            displayMode === "input" ? inputLanguage : outputLanguage
          }
          setSelectedLanguage={
            displayMode === "input" ? setInputLanguage : setOutputLanguage
          }
        />
      )}
    </div>
  );
}

export default App;

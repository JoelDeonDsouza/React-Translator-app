const PORT = 8000;

const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/languages", async (req, res) => {
  const option = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": process.env.RAPID_API_OWNER_ID,
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    },
  };
  try {
    const response = await axios(
      "https://google-translate20.p.rapidapi.com/languages",
      option
    );
    const arrayOfLanguagesData = Object.keys(response.data.data).map(
      (key) => response.data.data[key]
    );
    res.status(200).json(arrayOfLanguagesData);
  } catch (err) {
    console.log(error);
  }
});

app.get("/translate", async (req, res) => {
  const { textTranslate, outputLanguage, inputLanguage } = req.query;
  const option = {
    method: "GET",
    params: {
      text: textTranslate,
      tl: outputLanguage,
      sl: inputLanguage,
    },
    headers: {
      "X-RapidAPI-Host": process.env.RAPID_API_OWNER_ID,
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    },
  };
  try {
    const response = await axios(
      "https://google-translate20.p.rapidapi.com/translate",
      option
    );
    res.status(200).json(response.data.data.translate);
  } catch (err) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log("Wakeing up the server 80$$"));

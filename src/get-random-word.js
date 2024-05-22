async function getRandomWord() {
  const url = process.env.URL;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// {"word":"enfolder"}

export default getRandomWord;

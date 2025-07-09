export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const FetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
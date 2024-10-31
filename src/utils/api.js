export const fetchData = async (endpoint) => {
  const BaseUrl = "https://fakestoreapi.com"; // it must be in .env

  try {
    const response = await fetch(`${BaseUrl}${endpoint}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

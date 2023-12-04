export async function getCountryImage(countryName) {
  try {
    const response = await fetch(
      `${process.env.VUE_APP_PHOTOS_API}/?key=${
        process.env.VUE_APP_PHOTOS_API_KEY
      }&q=${encodeURIComponent(countryName)}&image_type=photo&pretty=true`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.hits.length > 0) {
      return data.hits[0].webformatURL;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error al obtener la imagen del país:', error);
    throw error;
  }
}

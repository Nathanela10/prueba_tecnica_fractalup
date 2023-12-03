export async function getCountryImage(countryName) {
  const response = await fetch(
    `https://pixabay.com/api/?key=41046402-48cc417dbec3d35945babb5ef&q=${encodeURIComponent(countryName)}&image_type=photo&pretty=true`
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
}
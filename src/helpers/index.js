export const generarId = () => {
  const random = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)
  return random + fecha
}

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=O8AFYAcUWP0Lq7kJ742Bi4QruiV0aySm&q=${category}&limit=20`
  const response = await fetch(url)
  const { data } = await response.json()

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))

  return gifs
}

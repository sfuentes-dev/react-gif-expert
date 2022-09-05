export const GifItem = ({ title, url }) => {
  return (
    <div className='card'>
      <img src={url} alt={`Gif of ${title}`} />
      <p>{title}</p>
    </div>
  )
}

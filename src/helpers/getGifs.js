export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category)}&api_key=SOkCLvqd4BKDSOM3mIyUF95Q8AkK0NLP`;
    const response = await fetch( url );
    const {data} = await response.json();

    const gifs = data.map( img => {
        return({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        })
    })

    return gifs;
}
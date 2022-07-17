async function getCards () {

    interface APIResponseTypes {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=${100}`)
    const data: APIResponseTypes[] = await response.json()
    const formedData = data.map(element => 
        ({category: element.albumId, id: element.id, title: element.title, url: element.url}))
    return formedData
}

export default getCards;
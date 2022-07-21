import {APIResponseTypes} from "../components/interfaces/APIResponse"
import categories from "../utils/categories"

async function getCards () {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data: APIResponseTypes[] = await response.json()
    const formedData = data.map(element => 
        ({category: categories.indexOf(element.category) + 1, id: element.id, title: element.title, url: element.image, price: element.price}))
    console.log(formedData)
    return formedData
}

export default getCards;
import { url } from "inspector";
import { title } from "process";
import React from "react";
import { ICardItem, ICardItemArray } from "../components/interface/ICardItem";

async function getCards () {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=${100}`)
    const data: {albumId: number, id: number, title: string, url: string, thumbnailUrl: string}[] = await response.json()
    const ret: ICardItemArray ={arr: []}
    data.map(element => ret.arr.push
        ({category: element.albumId, id: element.id, title: element.title, url: element.url}))
    return ret
}

export default getCards;
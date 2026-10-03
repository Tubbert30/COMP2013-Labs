import Card from "./Card"
import type { ResortListing } from "../data/data"

interface CardContainerProps{
    data: ResortListing[];
}

export default function CardContainer({data}: CardContainerProps){
    return(

        <div className="CardContainer">
            {data.map((list) => (
            <Card key={list.id} {...list} />
         ))}
        </div>
    )
}
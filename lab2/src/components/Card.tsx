import type { ResortListing } from "../data/data";

export default function Card({
  pic,
  country,
  location,
  rating,
  price
}:ResortListing){
    return(
        <div className="Card">
            <img src={pic} alt="" width="150px" />
            <p className="whiteText"><b>{country}</b></p> 
            <p><i>{location}</i></p>
            
            {rating>4?(<p style={{color:"green"}} className="rating">{rating}★</p>):
            (<p style={{color:"red"}} className="rating">{rating}★</p>)}
            
            <p>${price}/night</p>
        </div>
    )
}
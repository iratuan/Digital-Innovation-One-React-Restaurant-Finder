import React, { useState } from "react";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./styles";
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from "../Skeleton";

const RestaurantCard = ({ restaurant, onClick }) => {

    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars
                    count={5}
                    isHalf
                    value={restaurant.rating}
                    size={18}
                    edit={false}
                    activeColor="#e7711c"
                />
                <Address>
                    {restaurant.vicinity || restaurant.formatted_address}
                </Address>
            </RestaurantInfo>
            <RestaurantPhoto
                imageLoaded={imageLoaded}
                onLoad={() => setImageLoaded(true)}
                src={restaurant.phtotos ? restaurant.photos[0].getUrl() : restaurante} />
            {!imageLoaded && <Skeleton width="75px" height="75px" />}
        </Restaurant>)
}

export default RestaurantCard
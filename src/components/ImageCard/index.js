import React, { useEffect, useState } from 'react'
import Skeleton from '../Skeleton/index.js'
import { Card, Title } from './styles.js'

const ImageCard = ({ photo, title }) => {

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {

        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);

    }, [photo])

    return (
        <>
            {imageLoaded ? (
                <Card photo={photo}><Title>{title}</Title></Card>
            ) : (
                <Skeleton width="75px" height="75px" />
            )}

        </>)

}

export default ImageCard
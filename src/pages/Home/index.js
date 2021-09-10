import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel, ContainerCarousel, ModalTitle, ModalContent } from './styles'

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import ImageCard from '../../components/ImageCard';
import Modal from '../../components/Modal';

import RestaurantCard from '../../components/RestauranteCard';
import MapContainer from '../../components/Maps'
import Loader from '../../components/Loader';
import Skeleton from '../../components/Skeleton';

import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'




const Home = () => {
    const [placeId, setPlaceId] = useState(null);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
    const [inputValue, setInputValue] = useState("");
    const [modalOpened, setModalOpened] = useState(false);
    const [query, setQuery] = useState(null);

    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setQuery(inputValue);
            setInputValue("");
        }
    }

    const handleOpenModal = (placeId) => {
        setPlaceId(placeId)
        setModalOpened(true)
    }

    return (
        <Wrapper>

            <Container>
                <Search>
                    <Logo src={logo} />
                    <TextField
                        label="Pesquisar Restaurantes"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}>
                        <Input
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </TextField>

                    {restaurants.length > 0 ? (
                        <ContainerCarousel>
                        <CarouselTitle>Na sua Área</CarouselTitle>
                        <Carousel {...settings}>
                            {restaurants.map(restaurant => <ImageCard photo={(restaurant.photos) ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} />)}

                        </Carousel>
                    </ContainerCarousel>
                    ):(<Loader />)}
                </Search>

                {restaurants.map(restaurant => (
                    <RestaurantCard restaurant={restaurant} onClick={() => handleOpenModal(restaurant.place_id)} />
                ))}

            </Container>
            <MapContainer query={query} placeId={placeId} />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                <ModalContent>
                {restaurantSelected ? (<>
                    <p>{restaurantSelected?.formatted_phone_number}</p>
                    <p>{restaurantSelected?.formatted_address}</p>
                    <p><b>{restaurantSelected?.opening_hours? 'Aberto agora': 'Fechado nesse momento'}</b></p></>):(
                        <>
                        <Skeleton width="10px" height="10px"/>
                        <Skeleton width="10px" height="10px"/>
                        <Skeleton width="10px" height="10px"/>
                        <Skeleton width="10px" height="10px"/>
                        </>
                    )} 
                </ModalContent>
            </Modal>
        </Wrapper>)
}
export default Home;
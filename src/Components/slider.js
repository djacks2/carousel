import React from 'react';
import Slider from "react-slick";
import './slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const photos = [
    {
        name: "Photo 1",
        url: "../img/jcole.jpg",
        alt: "studio"
    },
    {
        name: "Photo 2",
        url: "../img/nas.jpg",
        alt: "roddy rich"
    },
    {
        name: "Photo 3",
        url: "../img/kanye.jpg",
        alt: "astroworld"
    },
    {
        name: "Photo 4",
        url: "../img/travisscott.jpg",
        alt: "Nike Air Jordan Retros Shoe"
    },
    {
        name: "Photo 5",
        url: "../img/Beyonce.jpg",
        alt: "Shoe Wall"
    }
]
class Carousel extends React.Component {
    render() {
        const settings = {
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides"
           }
    return (
        <div className="carousel-slide">
        <Slider {...settings}>
            {photos.map((photo) => {
                return(
                    <div>
                        <img width="100%" src={photo.url}/>
                    </div>
                )
            })}
        </Slider>
        </div>
          )
        }
}
export default Carousel;
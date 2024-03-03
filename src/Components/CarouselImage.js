import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Images/carouselImage1.jpeg'
import image2 from '../Images/carouselImage2.jpeg'
import image3 from '../Images/carouselImage3.jpeg'
import image4 from '../Images/carouselImage4.jpeg'
const CarouselImage = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={image1} alt='image1' style={{height:'28em',width :'60em', marginTop:'5px'}}/>
        
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image2} alt='image2' style={{height:'28em',width :'59em',marginTop:'5px'}}/>

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image3} alt='image3' style={{height:'28em',width :'60em',marginTop:'5px'}}/>

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image4} alt='image4' style={{height:'28em',width :'59em',marginTop:'5px'}}/>

                    
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselImage

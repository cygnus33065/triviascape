import { CarouselProvider, Slider, Slide,Image, ImageWithZoom } from 'pure-react-carousel';
import './SplashPage.css'
import 'pure-react-carousel/dist/react-carousel.es.css';
import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"
import image4 from "../../assets/images/image4.jpg"


const SplashPage = () => {

  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={50}
      totalSlides={4}
      hasMasterSpinner={true}
      interval={5000}
      isPlaying={true}
    >
      <Slider>
        <Slide className='slide' index={0}>
        <Image className='slide' src={image1} />
        </Slide>
        <Slide className='slide' index={1}>
        <Image src={image2} />
        </Slide>
        <Slide className='slide' index={2}>
        <Image src={image3} />
        </Slide>
        <Slide className='slide' index={3}>
        <Image src={image4} />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}


{/* <Slide className='slide' index={0}><ImageWithZoom rel='../../../assets/image1.jpg'/></Slide>
<Slide className='slide' index={1}><ImageWithZoom rel='../../../assets/image2.jpg'/></Slide>
<Slide className='slide' index={2}><ImageWithZoom rel='../../../assets/image3.jpg'/></Slide>
<Slide className='slide' index={3}><ImageWithZoom rel='../../../assets/image4.jpg'/></Slide> */}
export default SplashPage;

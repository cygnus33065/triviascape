import { CarouselProvider, Slider, Slide,Image, ImageWithZoom } from 'pure-react-carousel';
import './SplashPage.css'
import 'pure-react-carousel/dist/react-carousel.es.css';
const SplashPage = () => {

  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={50}
      totalSlides={4}
      hasMasterSpinner={true}
      interval={3000}
      isPlaying={true}
    >
      <Slider>
        <Slide className='slide' index={0}>
        <Image src='../../../assets/image2.jpg' />
        </Slide>
        <Slide className='slide' index={1}>test 2</Slide>
        <Slide className='slide' index={2}>test 3</Slide>
        <Slide className='slide' index={3}>test 4</Slide>
      </Slider>
    </CarouselProvider>
  );
}


{/* <Slide className='slide' index={0}><ImageWithZoom rel='../../../assets/image1.jpg'/></Slide>
<Slide className='slide' index={1}><ImageWithZoom rel='../../../assets/image2.jpg'/></Slide>
<Slide className='slide' index={2}><ImageWithZoom rel='../../../assets/image3.jpg'/></Slide>
<Slide className='slide' index={3}><ImageWithZoom rel='../../../assets/image4.jpg'/></Slide> */}
export default SplashPage;

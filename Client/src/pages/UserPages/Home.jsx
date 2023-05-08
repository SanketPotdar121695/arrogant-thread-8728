import React from 'react';
import Iphone14 from '../../components/Navbar/Iphone14';
import Banner from '../../components/Navbar/Banner';
import SimpleSlider from '../../components/Navbar/Slider';
import card from '../../assets/card.jpg';
import ipad from '../../assets/ipad.jpg';
import motherday from '../../assets/motherday.png';
import tradeIn from '../../assets/tradeIn.png';
import watch from '../../assets/watch.png';
import wwdc from '../../assets/wwdc.png';

const Home = () => {
  // React.useEffect(() => {
  //   let timeoutID = setTimeout(())
  // });

  return (
    <div>
      <Iphone14 />

      <Banner img1={tradeIn} img2={wwdc} />
      <Banner img1={watch} img2={ipad} />

      <Banner img1={motherday} img2={card} />

      <SimpleSlider />
    </div>
  );
};

export default Home;
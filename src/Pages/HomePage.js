import HeroContent from '../Components/HeroContent';
import Services from '../Components/ourServices';
import YchooseUs from '../Components/ChooseUs';
import Client from '../Components/Client';
const HomePage = () => {
  console.log("Rendering HomePage");
  return (
    <>
      <HeroContent />
      <Client/>
      <Services />
      <YchooseUs />
    </>
  )
}

export default HomePage
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs namesTechElements={['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']} />
      <AboutMe />
      <Portfolio />
    </>
  );
}

export default Main;

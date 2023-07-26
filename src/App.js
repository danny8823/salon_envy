import {Header, BackgroundImg, Nav, Img, Paragraph} from './style'
import bannerimg from './images/banner.jpg'

const App = () => {
  return (
    <>
      <Header>
        <BackgroundImg src = {bannerimg} alt ="banner image"/>
        <Nav>
          <a href = '#'>Home</a>
          <a href = '#'>About</a>
          <a href = '#'>Contact</a>
        </Nav>
        <Paragraph>
          Salon Envy
        </Paragraph>
      </Header>
    </>
  );
}

export default App;

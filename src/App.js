import { useScroll, useTransform } from "framer-motion"
import { Link } from "react-scroll"
import {Header, BackgroundImg,Logo, Nav, Img, Paragraph, Title, Section, AboutSection, AboutTitle, AboutParagraph, ContactSection, ContactParagraph, ContactTitle, Icons, IconText, Footer, HeaderTitle} from './style'
import bannerimg from './images/banner.jpg'
import hair1 from './images/hairdone.jpg'
import model1 from './images/model1.jpg'
import model2 from './images/model2.jpg'
import hair2 from './images/hairdone2.jpg'
import model3 from './images/model3.jpg'
import wedding from './images/wedding.jpeg'
import team from './images/team.jpg'
import phone from './images/phone.png'
import mail from './images/mail.png'
import yelp from './images/yelp.png'
const App = () => {

  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0,800])
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

  return (
    <>
      <Header>
        <BackgroundImg src = {bannerimg} alt ="banner image"/>
        <Nav>
          <Link to = 'home' spy={true} smooth={true} offset={50} duration={500}>Home</Link>
          <Link to = 'contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
          <Link to = 'about' spy={true} smooth={true} offset={50} duration={500}>About</Link>
        </Nav>
        <HeaderTitle style={{x}} id  = 'home'>
        From Ordinary to Extraordinary: Elevate Your Image with Us
        </HeaderTitle>
        <Title style={{x}}>Envy Salon</Title>
      </Header>
      <Section>
        <Img src = {hair1} alt = 'woman getting hair done'/>
        <Paragraph style ={{y}}>
          At Salon Envy our dedicated hairdressers turn your hair into a work of art, with years of experience we put great care and dedication to service you. We guarantee you will love your hair.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph style ={{y}}>
          Hair styles for modeling
        </Paragraph>
        <Img src = {model1} alt = 'model with purple hair'/>
      </Section>
      <Section>
        <Img src = {model2} alt = 'model'/>
        <Paragraph style ={{y}}>To styles for a fun night out</Paragraph>
      </Section>
      <Section>
        <Paragraph style ={{y}}>Hair stylists with years of professional experience!</Paragraph>
        <Img src = {hair2} alt = 'woman getting hair done'/>
      </Section>
      <Section>
        <Img src = {model3} alt = 'model'/>
        <Paragraph style ={{y}}>Photoshoot styling</Paragraph>
      </Section>
      <Section>
        <Paragraph style ={{y}}>And for weddings!</Paragraph>
        <Img src = {wedding} alt = 'wedding photo'/>
      </Section>
      <AboutSection id = 'about'>
        <AboutTitle>About us</AboutTitle>
        <Img src = {team} alt = 'team of hairdressers'/>
        <AboutParagraph>
          We are a team of dedicated hairdressers, working hard to bring out the best from your hair.
        </AboutParagraph>
      </AboutSection>
      <ContactSection id = 'contact'>
        <ContactTitle>
          Contact
        </ContactTitle>
        <ContactParagraph>
          Give us a call and set your appointment today!
        </ContactParagraph>
        <IconText><Icons src = {phone} alt = 'phone logo'/> 777-100-2000</IconText>
        <IconText><Icons src = {mail} alt = 'email logo'/>EnvySalon@gmail.com</IconText>
        <IconText><Icons src = {yelp} alt = 'yelp logo'/>Envy Salon</IconText>
      </ContactSection>
      <Footer>
        <small>Trademark of Envy Salons Inc.</small>
        <Link to = 'home' spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        <Link to = 'contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
        <Link to = 'about' spy={true} smooth={true} offset={50} duration={500}>About</Link>
      </Footer>
    </>
  );
}

export default App;

import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const HeaderTitle = styled(motion.p)`
  font-family: 'Lobster Two', cursive;
  max-width: 900px;
  font-size: 30px;
  position: relative;
  z-index: 1;
  margin: 17vh;
  transition: all 2s ease-in-out;
  color: black;
  bottom: 50px;
  font-weight: bold;
`
export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.8;
`;

export const Title = styled(motion.h1)`
  font-family: 'Lobster Two', cursive;
  color: white;
  font-size: 11em;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  transition: all 1s ease-in-out;
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  gap: 0 2em;
  margin: 30px 30px 30px auto;
  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    &:hover {
      color: green;
      cursor: pointer;
    }
  }
`;

export const Paragraph = styled(motion.p)`
  font-family: 'Barlow';
  max-width: 500px;
  font-size: 24px;
  position: relative;
  z-index: 1;
  margin: 17vh;
  transition: all 2s ease-in-out;
`;

export const Img = styled.img`
  width: 40em;
  box-shadow: 2px 2px 10px white;
`;

export const Section = styled.div`
  height: 80vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10em 0;
  color: white;
`;

export const AboutSection = styled.div`
  height: 90vh;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10em 0;
  color: white;
`
export const AboutTitle = styled.h1`
  font-family: 'Barlow';
  color: white;
  font-size: 8em;
  z-index: 1;
  margin: 40px;
  white-space: nowrap;
  margin-top: auto;
  border-bottom-style: solid;
  border-bottom-color: black;
  border-bottom-width: 2px;
  border-bottom-length: 60px;
`;

export const AboutParagraph = styled.p`
  font-family: 'Barlow';
  max-width: 500px;
  font-size: 24px;
  position: relative;
  margin: 10vh;
`;

export const ContactSection = styled.div`
  height: 40vh;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10em 0;
  color: white;
`;

export const ContactParagraph = styled.p`
  font-family: 'Barlow';
  max-width: 500px;
  font-size: 24px;
  position: relative;
  margin: 10vh;
`;

export const ContactTitle = styled.h1`
  font-family: 'Barlow';
  color: white;
  font-size: 8em;
  z-index: 1;
  margin: 20px;
  white-space: nowrap;
  margin-top: auto;
  border-bottom-style: solid;
  border-bottom-color: black;
  border-bottom-width: 2px;
  border-bottom-length: 60px;
`;

export const IconText = styled.p`
  font-family: 'Barlow';
  font-size:26px;
  margin: 10px;
`
export const Icons = styled.img`
  width: 20px;
`;

export const Footer = styled.nav`
  width: 100%;
  height: 20vh;
  background-color: black;
  display: flex;
  small {
    display: flex;
    color: white;
    align-items: flex-end;
  }
  a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    width: 50%;
    text-decoration: none;
    font-size: 20px;
    &:hover {
      color: green;
      cursor: pointer;
    }
`
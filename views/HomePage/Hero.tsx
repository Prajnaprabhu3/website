import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import { FaCheck, FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";
import InstallationAssistant from 'views/InstallationAssistant';
import Link from 'components/Link';

<IconContext.Provider value={{ color: "white", size: "10px" }}><FaCheck /></IconContext.Provider>

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>The open source GitHub action for</CustomOverTitle>
        <Heading>Pull Request Automation</Heading>
        <Description>
          <IconContext.Provider value={{ color: "green", size: "15px" }}><FaCheck /></IconContext.Provider> <b>Automate manual tasks</b>: labeling, reviewer assignment and merge<br/>
          <IconContext.Provider value={{ color: "green", size: "15px" }}><FaCheck /></IconContext.Provider> <b>Enforce compliance rules and conventions</b>: PR size, commit message, PR description, etc.
        </Description>
        <InstallationContainer>
          <InstallationAssistant />
        </InstallationContainer>
        <CustomButtonGroup>
          <HeroLink>
          <SocialIcon bgColor="white" fgColor="rgb(var(--primary))" target="_blank" url="https://github.com/reviewpad/action" style={{ height: 40, width: 40 }}/>
            <Link href="https://github.com/reviewpad/action">
              reviewpad/action ↗︎
            </Link>
          </HeroLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <div>
          <div>
            I add your labels<br/>
            I find your reviewers<br/>
            I merge your code
          </div>
          <Image src="/Revie Robot.svg" height={400} width={400} />
          {/* <HeroIllustration /> */}
        </div>
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroLink = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0.8;
  line-height: 3.6;
  margin: auto;
`;

const InstallationContainer = styled.div`
display: flex;
  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 70rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 0,5rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  
  text-align: center;
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.3;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 4rem;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

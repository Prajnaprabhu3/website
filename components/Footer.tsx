import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import LogoWhite from './LogoWhite';


type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Legal',
    items: [
      { title: 'Terms and Conditions', href: '/terms-and-conditions' },
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Legal Information', href: '/legal-information' },
    ],
  },
  {
    title: 'Company',
    items: [
      { title: 'Blog', href: '/blog' },
      { title: 'About Us', href: '/about-us' },
      { title: 'Press Kit', href: '/press-kit' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { title: 'Contact Us', href: 'mailto:info@reviewpad.com' },
      { title: 'Join Our Discord', href: '/discord' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
        <NextLink href="/" passHref>
          <LogoWrapper>
            <LogoWhite />
          </LogoWrapper>
        </NextLink>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <SocialIcon bgColor="#00000000" fgColor="white" url="https://www.twitter.com/reviewpad" />
            <SocialIcon bgColor="#00000000" fgColor="white" url="https://www.linkedin.com/company/reviewpad" />
            <SocialIcon bgColor="#00000000" fgColor="white" url="https://github.com/reviewpad" />
          </ShareBar>
          <Copyright>&copy; Copyright 2022 Reviewpad</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const LogoWrapper = styled.a`
  display: flex;
  margin-right: 5rem;
  text-decoration: none;

  color: rgb(var(#FFFFFF));
`;

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

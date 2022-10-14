import NextImage from 'next/image';
import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';
import { SocialIcon } from 'react-social-icons';
import TeamMember from 'components/TeamMember';

export default function ContactPage() {
  return (
    <Page title="Who Are We?">
      <AboutUsContainer>
        <img src="/reviewpad-team.jpg" alt="Reviewpad Team" />
        <RichText>
          <h3>Our mission is to provide code understanding superpowers to every software developer in the world</h3>
          <p>We Are A Team Of Developers On A Quest To Radically Improve Code Reviews.</p>
          <p>Code reviews are used on a daily basis by millions of developers to ensure that their software meets high standards of correctness, maintainability, and security. However, software quality is only as high as the quality of the code reviews. Since code reviews can stall the overall software development process, reviewers are constantly pressured to limit the time they spend on their reviews.</p>
          <p>Currently, as reviewers, if we want to do an extensive code review, we spend a lot of time feeling lost, looking for context and trying to organize the review. At the core of it, we often context switch between tools, struggling to understand the relationship between code changes and how they fit in the overall project. As developers, we also struggle to receive clear and actionable feedback and learn in the code review process.</p>
          <p>At Reviewpad, we believe that developers deserve a code review tool with which we can consistently achieve high-quality code reviews without compromising our productivity as developers.</p>
          <p>In a high-quality code review, we do not only identify code defects but also share invaluable information about technologies, team organization, and the engineering standards of the company. These are the code reviews we aim to bring to every team in the world.</p>
          <p>We are building a code review solution to help developers easily understand and review code written by others. This involves a significant shift from code reviews based on textual differences over files to what we call semantic code reviews. Semantic code reviews allow teams to move faster, consume fewer resources and increase the quality of their codebases.</p>

          <h1>Meet our team</h1>
        </RichText>
        <TeamContainer>
          <TeamMember
            imageUrl='/Portrait-Marcelo-Sousa.jpg' 
            name='Marcelo Sousa'
            position='CEO | Co-founder'
            socialGithub='https://github.com/marcelosousa'
            socialTwitter='https://twitter.com/marceloabsousa'
            socialLinkedin='https://www.linkedin.com/in/mabsousa/'
          />
          <TeamMember
            imageUrl='/Portrait-Adriano-Martins.jpg' 
            name='Adriano Martins'
            position='COO | Co-Founder'
            socialTwitter='https://twitter.com/adrianomartins'
            socialLinkedin='https://www.linkedin.com/in/adrianoapmartins'
          />
          <TeamMember
            imageUrl='/Portrait-Tiago-Ferreira.jpg' 
            name='Tiago Ferreira'
            position='Full Stack Navigator'
            socialGithub='https://github.com/ferreiratiago'
            socialTwitter='https://twitter.com/ferreiratiago_'
            socialLinkedin='https://www.linkedin.com/in/tiagolopesferreira/'
          />
          <TeamMember
            imageUrl='/Portrait-Cheila-Alves.jpg' 
            name='Cheila Alves'
            position='Full Stack Navigator'
            socialGithub='https://github.com/shay2025'
            socialLinkedin='https://www.linkedin.com/in/cheila-alves-798b76218/'
          />
          <TeamMember
            imageUrl='/Portrait-Mónica-Lacerda.jpg' 
            name='Mónica Lacerda'
            position='Executive Assistant, Office Manager'
            socialLinkedin='https://www.linkedin.com/in/m%C3%B3nica-lacerda/'
          />
          <TeamMember
            imageUrl='/Portrait-Freddy-Mallet.jpg' 
            name='Freddy Mallet'
            position='Advisor'
            socialTwitter='https://twitter.com/FreddyMallet'
            socialLinkedin='https://www.linkedin.com/in/freddymallet/'
          />
        </TeamContainer>
      </AboutUsContainer>
    </Page>
  );
}

const AboutUsContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
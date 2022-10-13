import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import RichText from './RichText';
import Link from 'components/Link';

export default function FeatureList() {
  return (
    <>
      <FeatureListWrapper>
        <ContentContainerLeft>  
          <Title>Reviewer Assignment</Title>
          <RichText>Specify ownership at the semantic level and also based on the nature of the changes. Import central configuration files. Define which rules have precedence.</RichText>
          <FeatureLink><Link href="https://docs.reviewpad.com/use-cases/reviewer-assignment">Read more ↗︎</Link></FeatureLink>
        </ContentContainerLeft>
        <ContentContainer>
          <Title>Automated Labelling</Title>
          <RichText>Create or update labels based in file paths, author groups, missing changes, code patterns, semantic code annotations, etc.</RichText>
          <FeatureLink><Link href="https://docs.reviewpad.com/use-cases/automated-labelling">Read more ↗︎</Link></FeatureLink>
        </ContentContainer>
      </FeatureListWrapper>
      <FeatureListWrapper>
        <ContentContainerLeft>  
          <Title>Enforce Conventions</Title>
          <RichText>Enforce branch and commit naming policies, and also automatically add labels based on the branch names. Check and provide error messages if commits do not comply.</RichText>
          <FeatureLink><Link href="https://docs.reviewpad.com/use-cases/enforce-branch-conventions">Read more ↗︎</Link></FeatureLink>
        </ContentContainerLeft>
        <ContentContainer>
          <Title>Automerge</Title>
          <RichText>Using the semantic features of Reviewpad, configure scenarios where auto-merge seems natural. Protect sensitive code with critical zones (dynamic or static generated).</RichText>
          <FeatureLink><Link href="https://docs.reviewpad.com/use-cases/auto-merge">Read more ↗︎</Link></FeatureLink>
        </ContentContainer>
      </FeatureListWrapper>
    </>
  );
}

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const FeatureLink = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  opacity: 0.8;
  line-height: 3.6;
`;

const ContentContainerLeft = styled.div`
  flex: 1;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const FeatureListWrapper = styled(Container)`
  display: flex;
  // align-items: center;
  margin-top: 20rem;

  ${ContentContainerLeft} {
    margin: 0 5rem 0 0;
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${ContentContainerLeft} {
      margin: 0 0 2.5rem 0;
    }
  }
`;

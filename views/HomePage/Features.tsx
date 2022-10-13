import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Reviewer Assignment.',
    description:
      'Specify ownership at the semantic level and also based on the nature of the changes. Import central configuration files. Define which rules have precedence.',
    link: 'https://docs.reviewpad.com/use-cases/reviewer-assignment',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Automated Labelling.',
    description:
      'Create or update labels based in file paths, author groups, missing changes, code patterns, semantic code annotations, etc.',
    link: 'https://docs.reviewpad.com/use-cases/automated-labelling',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Enforce Conventions',
    description:
      'Enforce branch and commit naming policies, and also automatically add labels based on the branch names. Check and provide error messages if commits do not comply.      ',
      link: 'https://docs.reviewpad.com/use-cases/enforce-branch-conventions',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Automerge',
    description:
      'Using the semantic features of Reviewpad, configure scenarios where auto-merge seems natural. Protect sensitive code with critical zones (dynamic or static generated).',
      link: 'https://docs.reviewpad.com/use-cases/auto-merge',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <>
          <BasicCard key={singleFeature.title} {...singleFeature} />
          </>
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 50rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

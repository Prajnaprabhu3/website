import styled from 'styled-components';
import Logo from 'components/Logo'
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Legal information">
      <LegalInformationContainer>
        <RichText>

        <Logo />

        <h3>Brand name</h3>

        <p>Reviewpad</p>

        <h3>Legal name</h3>

        <p>Explore.dev Unipessoal, Lda</p>

        <h3>Registration address</h3>

        <p>Avenida de Santo André 241, 1003. 4755-281 Barcelos, Portugal.</p>

        <h3>VAT Number</h3>

        <p>PT515697940</p>
        </RichText>
      </LegalInformationContainer>
    </Page>
  );
}

const LegalInformationContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;

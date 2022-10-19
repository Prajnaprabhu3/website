import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
import { media } from 'utils/media';
import MailSentState from '../components/MailSentState';

interface EmailPayload {
  repo: string;
}

export default function InstallationAssistant() {
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  async function onSubmit(payload: EmailPayload) {
    
    window.location.href = payload.repo+"/new/main?filename=.github%2Fworkflows%2Freviewpad.yml&value=%23%20This%20file%20configures%20Reviewpad%20action%20to%20run%20on%20Issues%20and%20Pull%20Requests!%20%F0%9F%A6%84%0Aname%3A%20Reviewpad%0A%0Aon%3A%0A%20%20issues%3A%0A%20%20%20%20types%3A%0A%20%20%20%20%20%20-%20opened%0A%20%20%20%20%20%20-%20edited%0A%20%20issue_comment%3A%0A%20%20pull_request_target%3A%0A%20%20%20%20types%3A%0A%20%20%20%20%20%20-%20opened%0A%20%20%20%20%20%20-%20synchronize%0A%20%20%20%20%20%20-%20edited%0A%0A%23%20These%20permissions%20are%20necessary%20to%20automate%20pull%20requests%20from%20forks.%0Apermissions%3A%0A%20%20pull-requests%3A%20write%0A%20%20issues%3A%20write%0A%0Ajobs%3A%0A%20%20reviewpad_job%3A%0A%20%20%20%20runs-on%3A%20ubuntu-latest%0A%20%20%20%20name%3A%20Reviewpad%0A%20%20%20%20steps%3A%0A%20%20%20%20%20%20-%20name%3A%20Reviewpad%0A%20%20%20%20%20%20%20%20uses%3A%20reviewpad%2Faction%40v3.x%0A%20%20%20%20%20%20%20%20with%3A%0A%20%20%20%20%20%20%20%20%20%20%23%20Use%20a%20default%20configuration%20file.%0A%20%20%20%20%20%20%20%20%20%20%23%20Remove%20next%20line%20if%20you%20want%20to%20add%20your%20own%20configuration.%0A%20%20%20%20%20%20%20%20%20%20file_url%3A%20https%3A%2F%2Fgithub.com%2Freviewpad%2Faction%2Fblob%2Fmain%2Ftemplates%2Fstart.yml%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%23%20Uncomment%20next%20line%20to%20use%20your%20own%20configuration%20file%20%F0%9F%92%AA%0A%20%20%20%20%20%20%20%20%20%20%23%20file%3A%20reviewpad.yml&message=ci%3A%20add%20Reviewpad%20action&description=Automation%20rocks%20%F0%9F%A4%98"
  }

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  if (hasSuccessfullySentMail) {
    return <MailSentState />;
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputStack>
            <Input placeholder="https://github.com/org/repo" id="repo" pattern="https?:\/\/(www\.)?github.com/.+/.+" disabled={isDisabled} {...register('repo', { required: true })} />
          </InputStack>
        </InputGroup>
        <InputGroup>
          <InputStack>
            <Button as="button" type="submit" disabled={isSubmitDisabled}>
              Install ↗︎
            </Button>
          </InputStack>
        </InputGroup>
        <InputGroup>
          <InputStack>
            {hasErrored && <ErrorMessage>Couldn&apos;t proceed with installation. Please try again.</ErrorMessage>}
            {errors.repo && <ErrorMessage>Repository link is required</ErrorMessage>}
          </InputStack>
        </InputGroup>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 2;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;


  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;

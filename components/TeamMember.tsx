import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

export interface TeamMemberProps {
  imageUrl: string;
  name: string;
  position: string;
  socialGithub?: string;
  socialTwitter?: string;
  socialLinkedin?: string;
  
}

export default function TeamMember({ imageUrl, name, position, socialTwitter, socialLinkedin, socialGithub}: PropsWithChildren<TeamMemberProps>) {
  return (
    <MemberContainer>
            <MemberImageContainer>
              <NextImage src={imageUrl} alt={name} width={175} height={175} />
            </MemberImageContainer>
            <MemberContent>
              <MemberName>{name}</MemberName>
              <MemberPosition>{position}</MemberPosition>
              <ShareBar>
                {socialGithub && <SocialIcon bgColor="#00000000" fgColor="black" style={{ height: 30, width: 30 }} target="_blank" url={socialGithub} />}
                {socialTwitter && <SocialIcon bgColor="#00000000" fgColor="black" style={{ height: 30, width: 30 }} target="_blank" url={socialTwitter} />}
                {socialLinkedin && <SocialIcon bgColor="#00000000" fgColor="black" style={{ height: 30, width: 30 }} target="_blank" url={socialLinkedin} />}
              </ShareBar>
            </MemberContent>
    </MemberContainer>
  );
}

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 5px 5px;
`;

const MemberContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.6rem;
  text-align: center;
  padding-top: 10px;
`;

const MemberPosition = styled.p`
  font-weight: normal;
`;

const MemberName = styled.p`
  font-weight: bold;
`;

const MemberImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;

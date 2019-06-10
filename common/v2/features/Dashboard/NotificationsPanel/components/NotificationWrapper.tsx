import React from 'react';
import styled from 'styled-components';

import { BREAK_POINTS } from 'v2/features/constants';

const { SCREEN_XS, SCREEN_MD } = BREAK_POINTS;

interface WrapperProps {
  alignCenterOnSmallScreen?: boolean;
}

const Wrapper =
  styled.div <
  WrapperProps >
  `
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;

  @media (max-width: ${SCREEN_MD}) {
    flex-direction: column;
    ${props => props.alignCenterOnSmallScreen && 'text-align: center;'};
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  max-width: 700px;
`;

interface LeftImageProps {
  width: string;
  height: string;
  transform?: string;
  hideOnMobile?: boolean;
  marginRight?: string;
}

const LeftImage =
  styled.img <
  LeftImageProps >
  `
${props => `width: ${props.width};`};
${props => `height: ${props.height};`};
${props => props.transform && `transform: ${props.transform};`};
${props =>
    props.hideOnMobile &&
    `@media (max-width: ${SCREEN_MD}) {
      display: none;
    }`};
    ${props => (props.marginRight ? `margin-right: ${props.marginRight};` : 'margin-right: 30px;')};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 24px;

  @media (max-width: ${SCREEN_XS}) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-weight: normal;
  word-break: break-word;
  font-size: 16px;
  white-space: pre-line;

  @media (max-width: ${SCREEN_XS}) {
    font-size: 14px;
  }

  strong {
    font-weight: 600;
  }
`;

const Resources = styled.div`
  display: flex;
  align-items: baseline;

  @media (max-width: ${SCREEN_MD}) {
    margin-top: 20px;
  }
`;

interface NotificationWrapperProps {
  leftImg: LeftImageProps;
  title: React.ReactElement<any>;
  description: React.ReactElement<any>;
  additionalDescription?: React.ReactElement<any>;
  resources: React.ReactElement<any>;
  alignCenterOnSmallScreen?: boolean;
  children?: any;
}

export default function NotificationWrapper({
  leftImg,
  title,
  description,
  additionalDescription,
  resources,
  alignCenterOnSmallScreen,
  children
}: NotificationWrapperProps) {
  return (
    <Wrapper alignCenterOnSmallScreen={alignCenterOnSmallScreen}>
      <Info>
        <LeftImage {...leftImg} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {additionalDescription && <Description>{additionalDescription}</Description>}
        </Content>
      </Info>
      <Resources>{resources}</Resources>
      {children}
    </Wrapper>
  );
}
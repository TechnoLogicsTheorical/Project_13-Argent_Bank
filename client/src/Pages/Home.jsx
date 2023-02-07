import React from 'react';
import styled from 'styled-components';

import BankTree from '../assets/img/bank-tree.jpeg';
import ChatIcon from '../assets/img/icon-chat.png';
import MoneyIcon from '../assets/img/icon-money.png';
import SecurityIcon from '../assets/img/icon-security.png';

// ----------------------- Hero Styles -----------------------
const HeroContainer = styled.div`
  background-image: url(${BankTree});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
`;

// ----------------------- Features Styles -----------------------
const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;  
  }
`;

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p``;

export default function Home() {
    return (
        <main>
            <HeroContainer>
                <HeroContent>
                    <h2 className="sr-only">Promoted Content</h2>
                    <Subtitle className="subtitle">No fees.</Subtitle>
                    <Subtitle className="subtitle">No minimum deposit.</Subtitle>
                    <Subtitle className="subtitle">High interest rates.</Subtitle>
                    <HeroText>Open a savings account with Argent Bank today!</HeroText>
                </HeroContent>
            </HeroContainer>
            <FeaturesSection>
                <h2 className="sr-only">Features</h2>
                <FeatureItem>
                    <FeatureIcon src={ChatIcon} alt="Chat Icon" />
                    <FeatureTitle>You are our #1 priority</FeatureTitle>
                    <FeatureText>
                        Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.
                    </FeatureText>
                </FeatureItem>
                <FeatureItem>
                    <FeatureIcon src={MoneyIcon} alt="Money Icon" />
                    <FeatureTitle>More savings means higher rates</FeatureTitle>
                    <FeatureText>
                        The more you save with us, the higher your interest rate will be!
                    </FeatureText>
                </FeatureItem>
                <FeatureItem>
                    <FeatureIcon src={SecurityIcon} alt="Security Icon" />
                    <FeatureTitle>Security you can trust</FeatureTitle>
                    <FeatureText>
                        We use top of the line encryption to make sure your data and money is always safe.
                    </FeatureText>
                </FeatureItem>
            </FeaturesSection>
        </main>
    );
}
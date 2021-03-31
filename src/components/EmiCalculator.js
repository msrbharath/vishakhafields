import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    background: #000d1a;
    padding: 5rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container = styled.div`
background: #fff;
  padding: 3rem 2rem;
  position: relative; 
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 768px) {
    height: 975px;
    max-height: 100%;
    max-width: 100%;
}  
`;


const EmiCalculator = () => {
    return (
        <Section>
            <Container>
                <iframe 
                    data-lazy-type="iframe" 
                    data-src="https://groww.in/pages/calculators/emi-calculator/" 
                    src="https://groww.in/pages/calculators/emi-calculator/"
                    width="100%" 
                    height="100%" 
                    scrolling="no" 
                ></iframe>
            </Container>
        </Section>
    )
}

export default EmiCalculator;

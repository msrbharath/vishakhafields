import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import ImageOne from '../images/kitchen-1.jpg';

const Section = styled.section`
    background: #000d1a;
    padding: 12rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container = styled.div`
background: #fff;
  padding: 3rem 2rem;
  position: relative;    
`;
const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const ColumnLeft = styled.div`
 display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;
const Content = styled.div`
flex: 0 0 50%;

@media screen and (max-width: 768px) {
  flex: 0 0 100%;
  max-width: 100%;
  margin-top: 250px;
}

h1 {
  margin-bottom: 2rem;
  font-size: 2rem;
}

p {
  margin-bottom: 1rem;
  line-height: 1.5;
}
`;
const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const AboutUs = () => {
    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='300'
                        data-aos-once='true'
                        data-aos-anchor-placement='center bottom'
                        >
                        <h1>About Us</h1>
                        <p>
                        Since our team had inception in 2020, our main intention is to focus on property development, where we are head quartered in Coimbatore. The main pillar of our development is basic amenities that we constantly strive to improve in offerings and service parts.
                Our team mainly works on Residential plots where we create an environment that enhances the quality of life for the people. In addition, we even work on industrial area for the new business people to step into their lives. We mostly deal with Residential site, Industrial site and Farm land.         
                        </p>
                        <p>
                        SRI VISHAKHA FIELDS company started in May 17th, 2020.
                        </p>
                        <Button to='/homes'>Learn More</Button>
                        </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image
                        //src={ImageOne}
                        data-aos='fade-left'
                        data-aos-duration='1200'
                        data-aos-once='true'
                        data-aos-anchor-placement='center bottom'
                        />
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    );
};

export default AboutUs;

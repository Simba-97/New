import React from 'react'
import Video from '../../Videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg} from './HeroElements'

const HeroPage = () => {
    return (
      <HeroContainer>
          <HeroBg>
              <VideoBg autoplay loop muted src={Video} type ='video/mp4'/>
          </HeroBg>
          <HeroContent>
              <HeroH1>
                  Hi there! I'm Hritik Kumar Singh, welcome to my portfolio site.
              </HeroH1>
              <HeroP>
                  ....
              </HeroP>
              <HeroBtnWrapper>
                  <Button to='resume'>
                      Download Resume {hover ? <ArrowForward /> : <ArrowDown />}
                  </Button>
              </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
    );
};

export default HeroPage;

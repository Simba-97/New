import React , {useState} from 'react'
import Video from '../../Videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowDown} from './HeroElements'
import {Button} from '../ButtonElement'
const HeroPage = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
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
                  <Button to='resume' onMouseEnter={onHover} onMouseLeave = {onHover} >
                      Download Resume {hover ? <ArrowForward /> : <ArrowDown />}
                  </Button>
              </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
    );
};

export default HeroPage;

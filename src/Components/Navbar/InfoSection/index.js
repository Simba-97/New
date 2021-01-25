import React from 'react'
import { Button } from 'react-scroll'
import { Column2, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Img, Column1, BtnWrap, Heading, TextWrapper, TopLine, Subtitle } from './InfoElement'

const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Topline</TopLine>
                                <Heading>Headline</Heading>
                                <Subtitle>Subtitle</Subtitle>
                                <BtnWrap>
                                    <Button to='home'/>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img></Img>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection

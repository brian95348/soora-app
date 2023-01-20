import React from "react";
import { Image, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text";
import { Block } from "./styles";

const FooterContainer = styled.View`
    flex: 1;
    width: 100%; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 106px;  
`

const SocialContainer = styled.View`
    padding: 8px;
    border: 1px solid black; 
    border-radius: 30px; 
`

const Socials = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 40px;
    width: 80%;
`

const CopyrightContainer = styled.View`
    height: 50px;  
`

export const Footer = () => {

    return (
        <Block marginTop='60px' >
            <FooterContainer>
                <Socials>
                    <SocialContainer>
                        <Image source={require('../../../../assets/facebook.png')} style={styles.socials} />
                    </SocialContainer>
                    <SocialContainer>
                        <Image source={require('../../../../assets/twitter.png')} style={styles.socials} />
                    </SocialContainer>
                    <SocialContainer>
                        <Image source={require('../../../../assets/instagram.png')} style={styles.socials} />
                    </SocialContainer>
                    <SocialContainer>
                        <Image source={require('../../../../assets/tiktok.png')} style={styles.socials} />
                    </SocialContainer>
                    <SocialContainer>
                        <Image source={require('../../../../assets/youtube.png')} style={styles.socials} />
                    </SocialContainer>
                </Socials>
                <CopyrightContainer style={styles.copyright}>
                    <Text variant='captionBody' >Copyright 	&#169; 2022 Soora. All rights reserved.</Text>
                </CopyrightContainer>
            </FooterContainer> 
        </Block>
    )
}

const styles = StyleSheet.create({
    socials: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    copyright: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopColor: 'black', 
      borderTopWidth: 1, 
      width: '100%',
    }
  })
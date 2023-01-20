import React, { useState } from "react";
import { Image, StyleSheet, Pressable, } from "react-native";
import { BlockContainer, TextContainer, RowCentered, Line, LinksContainer, ImageContainer,
         InputContainer, TextInput, Button, Block  } from './styles'
import { Spacer } from "../../../components/Spacer";
import { Text } from "../../../components/typography/text";


const Block1 = () => {

    return (
        <Block marginTop='60px'>
            <BlockContainer>
                <TextContainer>  
                    <RowCentered>
                        <Line />
                        <Text variant='captionHeader' > Coming Soon</Text>
                    </RowCentered>
                    <Text variant='heading' >Bringing Muslims Together</Text>
                </TextContainer>
                <LinksContainer>
                <Image source={require('../../../../assets/google-play.png')} style={styles.links} />
                <Spacer position='left' size='large'>
                    <Image source={require('../../../../assets/apple-store.png')} style={styles.links} />
                </Spacer>
                </LinksContainer>
                <ImageContainer>
                    <Image source={require('../../../../assets/landing-image-2.png')} style={styles.landingImage} />
                </ImageContainer>
            </BlockContainer>
        </Block>
    )
}

const Block2 = () => {
    const [email, setEmail] = useState('')
    const [isEmailSet, setIsEmailSet] = useState(false)

    const addEmail = () => {
        setIsEmailSet(true)
        setEmail('')
    }

    return (
        <Block marginTop='40px' >
            <BlockContainer>
                <TextContainer>  
                    <RowCentered>
                        <Line />
                        <Text variant='captionHeader' > Coming Soon</Text>
                    </RowCentered>
                    <Text variant='heading' >Get Notified When we launch</Text>
                    <InputContainer>
                        <TextInput value={email} onChangeText={(email) => setEmail(email)} />
                        <Pressable onPress={addEmail}>
                        <Button paddingLeftRight='21.5px' 
                                paddingTopBottom='8px' borderRadius='100px' background='#0B0B0B'>
                            <Text variant='mbutton' >Notify Me</Text>
                        </Button>
                        </Pressable>
                    </InputContainer>
                    { isEmailSet ? <Spacer size='large'>
                                        <Text variant='hint' >Your email address has been received</Text>
                                    </Spacer> : null }
                    <Spacer size='large'>
                        <Text variant='captionBody' >Don't worry, we won't spam you :&#41;</Text>
                    </Spacer>
                </TextContainer>
                <ImageContainer>
                    <Image source={require('../../../../assets/landing-image-1.png')} style={styles.landingImage} />
                </ImageContainer>
            </BlockContainer>
        </Block>
    )
}

const Body = () => {

    return (
        <>
            <Block1 />
            <Block2 />
        </>
    )
}

const styles = StyleSheet.create({
    links: {
        width: 135,
        height: 40,
        resizeMode: 'contain'
    },
    landingImage: {
      width: '90%',
      height: 500,
      resizeMode: 'contain'
    }
  })

export default Body
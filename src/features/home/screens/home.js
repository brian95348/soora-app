import React, { useState } from "react"
import { ScrollView, Pressable } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SafeAreaView } from "../../../components/utility/safe-area"
import { Text } from "../../../components/typography/text"
import { Spacer } from "../../../components/Spacer";
import { Image, StyleSheet } from "react-native";
import { Header, ButtonWithIcon } from '../components/styles'
import { Footer } from "../components/footer"
import { ModalView } from "../components/modal"
import Body from "../components/body"

const Home = ( ) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              <Header>
                  <Image source={require('../../../../assets/logo.png')} style={styles.logo} />
                  <Pressable onPress={() => setIsModalOpen(true)}>
                      <ButtonWithIcon paddingLeftRight='14px' paddingTopBottom='10px' borderRadius='4px' background='#0B0B0B'>
                          <Text variant='xbutton' >Contact us</Text>
                          <Spacer position='left' size='medium' >
                              <MaterialCommunityIcons name='arrow-top-right' size={20} color='white' />
                          </Spacer>
                    </ButtonWithIcon>
                  </Pressable>
              </Header> 
              <Body />
              <Footer />
            </ScrollView>
            <ModalView isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  logo: {
    width: 75,
    height: 16,
    resizeMode: 'contain'
  }
})

export default Home
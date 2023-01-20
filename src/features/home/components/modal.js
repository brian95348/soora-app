import React from 'react'
import { Image, StyleSheet, Pressable } from 'react-native';
import { Modal } from 'react-native-paper'
import styled from "styled-components/native";
import { Text } from '../../../components/typography/text';

const ModalContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 ${props => props.theme.space[4]};
`;

const ModalBox = styled.View`
  height: 135px;
  background: #FFFFFF;
  border-radius: 8px;
  width: 90%;
  align-self: center;
`

const ModalContent = styled.View`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 50%;
  margin: auto;
`

const EmailContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const CopyContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30px;
  height: 32px;
`

export const ModalView = ({isModalOpen,setIsModalOpen}) => {

    return (
        <Modal visible={isModalOpen} >
          <ModalContainer>
            <ModalBox>
                <ModalContent>
                    <Text variant='captionBody' >Reach us through</Text>
                    <EmailContainer>
                          <Text variant='email' >sooratheapp@gmail.com</Text>
                          <Pressable onPress={() => setIsModalOpen(false)} >
                                <CopyContainer>
                                    <Image source={require('../../../../assets/copy.png')} style={styles.copy} />
                                    <Text variant='xsmall' >Copy</Text>
                                </CopyContainer>
                          </Pressable>
                    </EmailContainer>
                </ModalContent>
            </ModalBox>
          </ModalContainer>
          </Modal>
    )
  }

const styles = StyleSheet.create({
    copy: {
      width: 20,
      height: 20,
      resizeMode: 'contain'
    }
  })
/* eslint-disable react/jsx-no-undef */
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"

type modalProps ={
    onOpen: () => void,
    onClose: () => void,
    isOpen: boolean,
}
export default function DetailModal(props: modalProps) {
    return (
      <>
        <Button onClick={props.onOpen}>Open Modal</Button>
        <Modal
          isCentered
          onClose={props.onClose}
          isOpen={props.isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={props.onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
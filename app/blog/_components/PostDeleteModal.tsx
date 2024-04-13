import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface PostDeleteModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onDelete: (isSubmit: boolean) => void;
}

function PostDeleteModal({
  isOpen,
  onOpenChange,
  onDelete,
}: PostDeleteModalProps) {
  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>정말 포스트를 삭제하시겠어요?</ModalHeader>
            <ModalBody>한 번 삭제된 포스트는 되돌릴 수 없어요.</ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                onPress={() => onDelete(true)}
              >
                삭제
              </Button>
              <Button onPress={onClose}>취소</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default PostDeleteModal;

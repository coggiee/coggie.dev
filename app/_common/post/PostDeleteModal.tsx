import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
interface PostDeleteModalProps {
  onDelete: (isSubmit: boolean) => void;
}

function PostDeleteModal({
  onDelete,
}: PostDeleteModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          삭제
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogContent className="w-96">
          <DialogHeader className="mb-5">
            <DialogTitle>정말 포스트를 삭제하시겠어요?</DialogTitle>
            <DialogDescription>
              한 번 삭제된 포스트는 되돌릴 수 없어요.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => onDelete(true)}>삭제</Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                취소
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default PostDeleteModal;

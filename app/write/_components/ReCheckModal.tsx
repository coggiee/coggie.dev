"use client";

import {
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Switch,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import NextImage from "next/image";
import IconRemove from "@/app/_icons/IconRemove";
import { ReCheckModalkProps } from "@/types/type";

export default function ReCheckModal({
  isOpen,
  onOpenChange,
  handleOnTypeDesc,
  handleOnToggleHotPost,
  handleOnClickSaveBtn,
  handleOnFileChange,
  description,
  coverImageUrl,
  defaultSelected,
}: ReCheckModalkProps) {
  const [preview, setPreview] = useState<string | null>(coverImageUrl ?? null); // 이미지 url 주소 in string

  const handleCoverImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (!file) return;
    handleOnFileChange(e);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
  };

  const handleRemoveImage = () => {
    setPreview(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              상세 정보를 채워주세요!
            </ModalHeader>
            <ModalBody>
              <label htmlFor="desc" className="font-bold">
                설명
              </label>
              <Textarea
                id="desc"
                className="w-full resize-none outline-none text-base font-bold overflow-visible min-h-[5em]"
                placeholder="설명을 입력하세요"
                variant="flat"
                labelPlacement="outside"
                value={description}
                onChange={handleOnTypeDesc}
              />

              <div className="w-full mb-7">
                <div className="font-bold mb-3">썸네일</div>
                {!preview && (
                  <div className="flex flex-col">
                    <Input
                      type="file"
                      accept="image/*"
                      id="coverImage"
                      name="coverImage"
                      className="w-full max-w-xs mb-3 hidden"
                      hidden
                      onChange={handleCoverImage}
                    />
                    <div className="h-52 flex justify-center items-center border border-dotted border-black dark:border-[#909090] rounded-lg ">
                      <label htmlFor="coverImage" className="font-bold">
                        사진을 선택해주세요!
                      </label>
                    </div>
                  </div>
                )}
                {preview && (
                  <div className="flex flex-col justify-center items-center gap-3">
                    <Image
                      as={NextImage}
                      alt="Thumbnail"
                      src={preview}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <Button
                      isIconOnly
                      radius="full"
                      variant="ghost"
                      onPress={handleRemoveImage}
                    >
                      <IconRemove />
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-5 font-bold">📍 Pinned?</span>
                <Switch
                  isSelected={defaultSelected}
                  color="success"
                  size="sm"
                  onChange={handleOnToggleHotPost}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onClose}>
                취소
              </Button>
              <Button
                color="success"
                onPress={() => {
                  handleOnClickSaveBtn();
                  onClose();
                }}
              >
                출간
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

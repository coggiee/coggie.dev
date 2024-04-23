"use client";

import React, { useState } from "react";
import { ReCheckModalkProps } from "@/types/type";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CircleX, Image as ImageIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function ReCheckModal({
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
    <Dialog>
      <DialogTrigger asChild>
        <Button>출간하기</Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-100">
        <DialogHeader>
          <DialogTitle className="flex justify-between">
            <span>상세 정보를 채워주세요!</span>
            <div className="flex items-center space-x-3">
              <Switch
                id="pinned"
                defaultChecked={defaultSelected}
                onCheckedChange={handleOnToggleHotPost}
              />
            </div>
          </DialogTitle>
        </DialogHeader>
        <section className="flex flex-col gap-7">
          <div className="w-full">
            {!preview ? (
              <div className="flex flex-col">
                <Input
                  type="file"
                  accept="image/*"
                  id="thumbnail"
                  name="coverImage"
                  className="w-full max-w-xs mb-3 hidden"
                  hidden
                  onChange={handleCoverImage}
                />
                <div className="h-64 flex flex-col gap-3 justify-center items-center bg-[#e5e5e584] dark:border-[#909090] rounded-lg ">
                  <ImageIcon className="w-24 h-24 text-[#9a9a9a]" />
                  <Label
                    htmlFor="thumbnail"
                    className="font-bold p-3 bg-white rounded-md cursor-pointer"
                  >
                    썸네일 업로드
                  </Label>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-3">
                <Image
                  alt="Thumbnail"
                  src={preview}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-lg"
                />
                <Button size="icon" variant="ghost" onClick={handleRemoveImage}>
                  <CircleX />
                </Button>
              </div>
            )}
          </div>
          <Textarea
            placeholder="당신의 포스트를 짧게 소개해보세요."
            className="w-full resize-none border p-5 h-40 bg-white"
            value={description}
            onChange={handleOnTypeDesc}
          />
        </section>
        <DialogFooter className="space-x-3">
          <Button
            onClick={() => {
              handleOnClickSaveBtn();
            }}
          >
            출간
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              취소
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    // <Modal
    //   isOpen={isOpen}
    //   onOpenChange={onOpenChange}
    //   backdrop="blur"
    //   classNames={{
    //     backdrop:
    //       "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
    //   }}
    // >
    //   <ModalContent>
    //     {(onClose) => (
    //       <>
    //         <ModalHeader className="flex flex-col gap-1">
    //           상세 정보를 채워주세요!
    //         </ModalHeader>
    //         <ModalBody>
    //           <label htmlFor="desc" className="font-bold">
    //             설명
    //           </label>
    //           <Textarea
    //             id="desc"
    //             className="w-full resize-none outline-none text-base font-bold overflow-visible min-h-[5em]"
    //             placeholder="설명을 입력하세요"
    //             variant="flat"
    //             labelPlacement="outside"
    //             value={description}
    //             onChange={handleOnTypeDesc}
    //           />

    // <div className="w-full mb-7">
    //   <div className="font-bold mb-3">썸네일</div>
    //   {!preview && (
    //     <div className="flex flex-col">
    //       <Input
    //         type="file"
    //         accept="image/*"
    //         id="coverImage"
    //         name="coverImage"
    //         className="w-full max-w-xs mb-3 hidden"
    //         hidden
    //         onChange={handleCoverImage}
    //       />
    //       <div className="h-52 flex justify-center items-center border border-dotted border-black dark:border-[#909090] rounded-lg ">
    //         <label htmlFor="coverImage" className="font-bold">
    //           사진을 선택해주세요!
    //         </label>
    //       </div>
    //     </div>
    //   )}
    //   {preview && (
    //     <div className="flex flex-col justify-center items-center gap-3">
    //       <Image
    //         as={NextImage}
    //         alt="Thumbnail"
    //         src={preview}
    //         width={400}
    //         height={400}
    //         className="object-cover w-full h-full rounded-lg"
    //       />
    //       <Button
    //         isIconOnly
    //         radius="full"
    //         variant="ghost"
    //         onPress={handleRemoveImage}
    //       >
    //         <IconRemove />
    //       </Button>
    //     </div>
    //   )}
    // </div>
    // <div className="flex items-center">
    //   <span className="text-sm mr-5 font-bold">📍 Pinned?</span>
    //   <Switch
    //     isSelected={defaultSelected}
    //     color="success"
    //     size="sm"
    //     onChange={handleOnToggleHotPost}
    //   />
    // </div>
    //         </ModalBody>
    //         <ModalFooter>
    //           <Button color="danger" onPress={onClose}>
    //             취소
    //           </Button>
    //           <Button
    //             color="success"
    //             onPress={() => {
    //               handleOnClickSaveBtn();
    //               onClose();
    //             }}
    //           >
    //             출간
    //           </Button>
    //         </ModalFooter>
    //       </>
    //     )}
    //   </ModalContent>
    // </Modal>
  );
}

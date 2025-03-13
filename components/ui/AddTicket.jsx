"use client";

import { createReason } from "@/constant/my_tickets";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  Input,
  Textarea,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { PiCloudCheck } from "react-icons/pi";
import DragNDropUpload from "../layout/DragNDropUpload";
import { IoChatbubblesOutline } from "react-icons/io5";

export default function AddTicket({ fileID, isOpen, onOpenChange }) {
  const [about, setAbout] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        className="bg-slate-800 border border-slate-800 p-4 text-slate-200"
        backdrop="blur"
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h1 className="text-primary text-lg ">Create a new Ticket</h1>
              </ModalHeader>

              <ModalBody>
                <div className="col-flex gap-2">
                  <Select
                    label="Ticket about"
                    onChange={(e) => setAbout(e.target.value)}
                    selectedKey={about}
                    classNames={{
                      label: "!text-slate-400 text-xs",
                      value: "text-xs !text-slate-100",
                      trigger: "!bg-slate-900 border border-slate-800",
                    }}
                    radius="sm"
                  >
                    <SelectItem value="" isDisabled>
                      Select a reason
                    </SelectItem>
                    {createReason.map((reason) => (
                      <SelectItem key={reason.key}>{reason.label}</SelectItem>
                    ))}
                  </Select>
                  <Input
                    label="Ticket Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    classNames={{
                      input: "!text-slate-300",
                      label: "!text-slate-400 text-xs",
                      inputWrapper:
                        "!bg-slate-900 text-slate-200 h-[55px] border border-slate-800",
                    }}
                    radius="sm"
                  />
                  <div className="">
                    <DragNDropUpload />
                  </div>
                  <Textarea
                    label="Describe the problem as specifically as possible"
                    size="md"
                    classNames={{
                      input: "!text-slate-300",
                      inputWrapper:
                        "!bg-slate-900 text-slate-200 border border-slate-800",
                      label: "!text-slate-400 text-xs",
                    }}
                    minRows={4}
                  />
                </div>
              </ModalBody>

              <ModalFooter>
                <div className=" w-[160px]">
                  <Button
                    color="primary"
                    variant="solid"
                    className=" h-[45px] !bg-primary w-full"
                    // onPress={handleUpload}
                    // isDisabled={!selectedEngine}
                    startContent={
                      <div className="w-5 h-5">
                        <IoChatbubblesOutline className="text-lg text-white" />
                      </div>
                    }
                  >
                    Start Chat
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

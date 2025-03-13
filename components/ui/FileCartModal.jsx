"use client";

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
} from "@heroui/react";
import { useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { PiCloudCheck } from "react-icons/pi";

export default function FileCartModal({ itemData, isOpen, onOpenChange }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        className="bg-slate-900 border border-slate-800 p-1 text-slate-200"
        backdrop="blur"
        size="xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h1 className="text-primary text-lg ">Selection Review</h1>
              </ModalHeader>
              <ModalBody>
                <div className="col-flex gap-3 px-5">
                  <div className="flex-between cartInfo">
                    <h1>Car Info</h1>
                    <p>AUDI A6 C6 2008-2010 2.7 TDI 163hp</p>
                  </div>
                  <div className="flex-between cartInfo">
                    <h1>ECU Info</h1>
                    <p>Bosch EDC17CP14</p>
                  </div>
                  <div className="flex-between cartInfo">
                    <h1>Tool Info</h1>
                    <p>MPPS</p>
                  </div>
                  <div className="flex-between cartInfo">
                    <h1>Uploaded File</h1>
                    <p>file.txt</p>
                  </div>
                  <div className="flex-between cartInfo">
                    <h1>Cart Info</h1>
                    <div className="col-flex items-end">
                      <p>DPF - 0Tokens</p>
                      <p>MAF - 0Tokens</p>
                      <p>Hot Start - 0Tokens</p>
                      <p>Torque Monitoring - 0Tokens Only </p>
                      <p>Checksum (+0.1) - 0.1Tokens</p>
                      <p>Options - 0.5Tokens</p>
                    </div>
                  </div>
                  <div className="flex-between cartInfo">
                    <h1>Total Euro</h1>
                    <p>€20</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className=" w-[190px]">
                  <Button
                    color="primary"
                    variant="solid"
                    className=" h-[45px] !bg-primary w-full"
                    // onPress={handleUpload}
                    // isDisabled={!selectedEngine}
                    startContent={
                      <div className="w-5 h-5">
                        <PiCloudCheck className="text-lg text-white" />
                      </div>
                    }
                  >
                    Confirm & Upload
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

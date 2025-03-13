"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useEffect } from "react";

export default function CatalogStage({ itemData, isOpen, onOpenChange }) {
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
              <ModalHeader className="">
                Auto Diagonoza Performance Tuning
              </ModalHeader>
              <ModalBody>
                <div className="pl-3 col-flex gap-1">
                  <div className="flex">
                    <div className="w-[100px] h-[40px] flex-center text-sm font-semibold text-slate-400"></div>
                    <div className="w-[120px] h-[40px] flex-center text-center text-sm font-semibold text-slate-400">
                      Original
                    </div>
                    <div className="w-[120px] h-[40px] flex-center text-center text-sm font-semibold text-slate-400">
                      Stage 1
                    </div>
                    <div className="w-[120px] h-[40px] flex-center text-center text-sm font-semibold text-slate-400">
                      Increase
                    </div>
                  </div>

                  <div className="flex pt-2">
                    <div className="w-[100px] h-[70px] flex-center flex-col text-sm font-semibold text-slate-400">
                      Power
                      <span>(hp)</span>
                    </div>
                    <div className="w-[120px] h-[70px] flex-center text-2xl hover:opacity-80 bg-slate-800">
                      {itemData.oPwr}
                    </div>
                    <div className="w-[120px] h-[70px] flex-center text-2xl hover:opacity-80 bg-primary text-black">
                      {itemData.s1Pwr}
                    </div>
                    <div className="w-[120px] h-[70px] flex-center text-2xl hover:opacity-80 bg-slate-800 text-primary">
                      +{itemData.s1Pwr - itemData.oPwr}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-[100px] h-[70px] flex-center flex-col text-sm font-semibold text-slate-400">
                      Torque
                      <span>(Nm)</span>
                    </div>
                    <div className="w-[120px] h-[70px] flex-center text-2xl hover:opacity-80 bg-slate-800">
                      {itemData.oTorq}
                    </div>
                    <div className="w-[120px] h-[70px] flex-center text-2xl hover:opacity-80 bg-lime-600 text-black">
                      {itemData.s1Torq}
                    </div>
                    <div className="w-[120px] h-[70px] flex-center text-2xl hover:opacity-80 bg-slate-800 text-lime-500">
                      +{itemData.s1Torq - itemData.oTorq}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-[100px] h-[70px] flex-center flex-col text-sm font-semibold text-slate-400">
                      Info
                      {/* <span>Volume</span> */}
                    </div>
                    <div
                      className="w-[120px] h-[85px] flex-center flex-col text-base
                     text-primary hover:opacity-80 bg-slate-800 text-center"
                    >
                      <p className="text-[10px] text-slate-200">
                        Cylinder Volume
                      </p>
                      {itemData?.cylinderVolume}
                    </div>
                    <div
                      className="w-[120px] h-[85px] flex-center flex-col text-base
                     text-primary hover:opacity-80 bg-slate-700 text-center"
                    >
                      <p className="text-[10px] text-slate-200">ECU Type</p>
                      {itemData?.ecuType[0]}
                    </div>
                    <div
                      className="w-[120px] h-[85px] flex-center flex-col text-base
                     text-primary hover:opacity-80 bg-slate-800 text-center"
                    >
                      <p className="text-[10px] text-slate-200">Engine No.</p>
                      {itemData?.motorNo}
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

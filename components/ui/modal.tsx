"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@/components/ui";
import Image from "next/image";

export function Modal(props: {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  children: any;
}) {
  const { isOpen, closeModal, title, children } = props;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto font-nuform">
            <div className="flex items-center justify-center min-h-full p-8 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform border-4 shadow-xl h-fit-content bg-secondary border-main">
                  <Dialog.Title
                    as="h3"
                    className="flex align-text-top leading-7 justify-between min-h-8 pb-[0.7rem] text-3xl border-b-4 text-main border-main"
                  >
                    {title}
                    <IconButton onClick={closeModal}>
                      <Image
                        alt="x mark icon"
                        src="icons/x-mark-small.svg"
                        width={19.8}
                        height={19.8}
                      />
                    </IconButton>
                  </Dialog.Title>
                  <div className="mt-2">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

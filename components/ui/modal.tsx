"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@/components/ui";

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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto font-nuform">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-fit-content max-w-md transform overflow-hidden bg-secondary border-main border-4 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl text-main border-b-4 border-main flex pb-4 justify-between"
                  >
                    {title}
                    <IconButton onClick={closeModal}>
                      <XMarkIcon height={36} width={36} />
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

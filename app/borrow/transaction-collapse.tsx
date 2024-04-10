"use client";

import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";
import TransactionsList from "./transactions-list";
import { Disclosure, Transition } from "@headlessui/react";

export default function TransactionsCollapse({
  transactions,
  title,
  user,
}: {
  transactions: JoinedTransaction[];
  title: string;
  user: User;
}) {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <div className="flex items-center justify-between w-full pb-2 mb-4 border-b-4 border-main">
              <div className="text-3xl text-main">{title}</div>
              <ChevronDownIcon
                className={`fill-main ${open ? "rotate-180 transform" : ""}`}
                width={24}
                height={24}
              />
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            className="transition-all duration-300 overflow-hidden"
            enterFrom="transform scale-95 opacity-0 max-h-0"
            enterTo="transform scale-100 opacity-100 max-h-[1000px]"
            leaveFrom="transform scale-100 opacity-100 max-h-[1000px]"
            leaveTo="transform scale-95 opacity-0 max-h-0"
          >
            <Disclosure.Panel>
              <TransactionsList transactions={transactions} user={user} />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

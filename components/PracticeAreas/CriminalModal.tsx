import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment, useState } from "react";
import criminal from "../../public/images/criminal.png";

export default function CriminalModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="border-solid shadow-2xl border-black  text-center p-10 rounded">
        <div className="items-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <Image
              className="mx-auto h-32"
              src={criminal}
              alt="Criminal Image"
              width={128}
              height={128}
            />
          </motion.div>
        </div>

        <h1 className="text-center font-bold text-3xl py-5">Criminal</h1>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <button
            onClick={openModal}
            className="bg-gray-600 text-white p-4 font-semibold border-dotted border-black rounded py-3 hover:bg-gray-400"
          >
            Know More
          </button>
        </motion.div>
      </div>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    Criminal
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-xl text-gray-500">
                      Criminal laws in India are formed to punish those who are
                      found guilty of committing criminal offenses. Indian Penal
                      Code (IPC) is the main criminal code of India. This
                      comprehensive code was drafted in the year 1860 during the
                      early British rule. Most of the cases pending in Indian
                      courts solely are of criminal nature.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

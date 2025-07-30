import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

import { MainDialogProps } from "@src/interfaces";

export const MainDialog: React.FC<MainDialogProps> = ({
  isOpen,
  title,
  width = "50%",
  glassStyle = false,
  onHandleClose,
  children,
}) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={onHandleClose}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`relative space-y-4 bg-white p-4 rounded-xl w-4/5 md:w-3/5 lg:w-2/4 ${
                  glassStyle ? "scrolled-class" : ""
                }`}
              >
                <button
                  onClick={onHandleClose}
                  className={`absolute top-2 right-3 ${
                    glassStyle
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <IoCloseOutline size={20} />
                </button>

                {title && (
                  <DialogTitle
                    className={`text-2xl md:text-xl ${
                      glassStyle ? "text-white" : "text-black"
                    } font-medium text-center mb-5`}
                    data-aos="zoom-in"
                  >
                    {title}
                  </DialogTitle>
                )}
                {children}
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

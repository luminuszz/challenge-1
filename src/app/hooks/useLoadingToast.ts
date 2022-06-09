import { ToastId, useToast, UseToastOptions } from "@chakra-ui/react";
import { useRef } from "react";
import { v4 as uuid } from "uuid";

const useLoadingToast = (options: UseToastOptions = {}) => {
  const toastRefId = useRef<Record<string, ToastId>>({});

  const defaultOptions: UseToastOptions = {
    ...options,
    duration: null,
    status: "loading",
  };

  const toast = useToast();

  return () => {
    const toastIidentifier = uuid();

    const deleteToastRef = () => delete toastRefId.current[toastIidentifier];

    return {
      start(message: string, startOptions?: UseToastOptions) {
        toastRefId.current[toastIidentifier] = toast({
          ...(startOptions || defaultOptions),
          duration: null,
          status: "loading",
          title: message,
        });
      },

      success(message: string, successOptions: UseToastOptions = { duration: 5000 }) {
        this.update(message, { ...defaultOptions, ...successOptions, status: "success" });

        deleteToastRef();
      },

      error(message: string, errorOptions?: UseToastOptions) {
        this.update(message, { ...defaultOptions, ...errorOptions, status: "error" });

        deleteToastRef();
      },

      update(message: string, updateOptions?: UseToastOptions) {
        if (toastRefId.current) {
          toast.update(toastRefId.current[toastIidentifier] as string, {
            title: message,
            ...(updateOptions || defaultOptions),
          });
        }
      },
      finish() {
        if (toastRefId.current) {
          toast.close(toastRefId.current[toastIidentifier]);

          deleteToastRef();
        }
      },
      toastIidentifier,
    };
  };
};

export type UseToastLoadingReturn = ReturnType<typeof useLoadingToast>;

export default useLoadingToast;

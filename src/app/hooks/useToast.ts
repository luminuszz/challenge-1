import { useToast as useChakraToast, UseToastOptions } from "@chakra-ui/react";
import { useCallback } from "react";

import useLoadingToast from "@app/hooks/useLoadingToast";

const useToast = (extraOptions?: UseToastOptions) => {
  const defaultOptions: UseToastOptions = {
    position: "top-right",
    ...(extraOptions || {}),
  };

  const toast = useChakraToast(defaultOptions);

  const makeToastFactory = useCallback(
    (type: UseToastOptions["status"], message: string, options?: UseToastOptions) =>
      toast({
        title: message,
        status: type,
        ...(options || {}),
      }),
    [toast]
  );

  const loadingToast = useLoadingToast(defaultOptions);

  const success = useCallback(
    (message: string, options?: UseToastOptions) => makeToastFactory("success", message, options),
    [makeToastFactory]
  );

  const error = useCallback(
    (message: string, options?: UseToastOptions) => makeToastFactory("error", message, options),
    [makeToastFactory]
  );

  const warn = useCallback(
    (message: string, options?: UseToastOptions) => makeToastFactory("warning", message, options),
    [makeToastFactory]
  );

  const info = useCallback(
    (message: string, options?: UseToastOptions) => makeToastFactory("info", message, options),
    [makeToastFactory]
  );

  const createLoadingToast = useCallback(() => loadingToast(), [loadingToast]);

  return {
    success,
    error,
    warn,
    info,
    createLoadingToast,
  };
};

export type UseToastReturn = ReturnType<typeof useToast>;

export default useToast;

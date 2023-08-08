import { type Toast, toast as reactToast } from "react-hot-toast";

type ToastType =
  | Partial<
      Pick<
        Toast,
        | "id"
        | "icon"
        | "duration"
        | "ariaProps"
        | "className"
        | "style"
        | "position"
        | "iconTheme"
      >
    >
  | undefined;

export const useToast = () => {
  const options: ToastType = {
    duration: 2000,
    id: "toast"
  };
  const toast = {
    success: (message: string) => {
        reactToast.success(message, options);
    },
    error: (message: string) => {
        reactToast.error(message, options);
    },
  };
  return toast;
};
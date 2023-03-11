import "react-toastify/dist/ReactToastify.css";
import { toast, ToastOptions } from "react-toastify";

interface ShowToastProps {
  message: string;
  type: "error" | "warning" | "success";
}

export const showToast = ({ message, type }: ShowToastProps) => {
  const toastConfiguration: ToastOptions = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    theme: "dark",
  };

  if (type === "error") {
    return toast.error(message, { ...toastConfiguration });
  } else if (type === "warning") {
    return toast.warning(message, toastConfiguration);
  } else if (type === "success") {
    return toast.success(message, toastConfiguration);
  }
};

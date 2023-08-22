import { useEffect, useState } from "react";

const useInternetConnection = () => {
  const [internetStatus, setInternetStatus] = useState(true);

  // check if online or offline
  useEffect(() => {
    window.addEventListener("offline", () => {
      setInternetStatus(false);
    });
    window.addEventListener("online", () => {
      setInternetStatus(true);
    });
  }, []);
  return internetStatus;
};
export default useInternetConnection;

import { useEffect } from "react";

export default function useLocalStorage(key, value) {
  useEffect(() => {
    if (typeof(value) === "string") {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);
}
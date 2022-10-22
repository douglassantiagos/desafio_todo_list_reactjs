import React, { useEffect, useState } from "react"
import { TaskProps } from "../App";

interface Props {
  key: string;
  initialValue?: TaskProps[]
}

export function useLocalStorage({ key, initialValue }: Props) {
  const [state, setState] = useState(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  })

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.log(error);
      }
    }
  }, [state, key]);

  return [state, setState]
}
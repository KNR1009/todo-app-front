import React, { useContext, useState, createContext } from "react";
import { Task } from "../types/types";

// プロバイダーの中で取り扱う関数とstateの型定義
interface StateContextType {
  tasks: Task[] | null;
  dark: boolean;
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

// コンテキスト(グローバルで共有するstate)を定義
const StateContext = createContext({} as StateContextType);

// プロバイダーコンポーネントの作成
export const StateProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [dark, setDark] = useState<boolean>(false);

  return (
    <StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>
      {children}
    </StateContext.Provider>
  );
};

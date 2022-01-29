import { useState, useEffect } from "react";
import { useStateContext } from "../context/StateProvider";
import axios from "axios";

export const useClassicalFetch = () => {
  // グローバルstateの更新関数
  const { tasks, setTasks } = useStateContext();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  // 従来の方法
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await axios("http://localhost:3000/tasks");
        setTasks(res.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setTasks]);

  return { tasks, isLoading, isError };
};

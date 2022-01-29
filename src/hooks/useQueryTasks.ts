import { useQuery } from "react-query";
import axios from "axios";
import { Task } from "../types/types";

// api連携

const getTasks = async () => {
  const { data } = await axios.get<Task[]>("http://localhost:3000/tasks");
  return data;
};

export const useQueryTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: "tasks",
    queryFn: getTasks,
    cacheTime: 30000,
    staleTime: 30000,
  });
};

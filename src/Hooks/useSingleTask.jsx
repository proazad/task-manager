import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleTask = (id) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: task,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/task/${id}`);
      return res.data;
    },
  });
  return [task, isLoading, refetch];
};

export default useSingleTask;

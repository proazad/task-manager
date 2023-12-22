import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useUser from "./useUser";

const useTasks = () => {
  const axiosPublic = useAxiosPublic();
  const [WhoAmI] = useUser();

  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [WhoAmI?.id, "tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/task/${WhoAmI._id}`);
      return res.data;
    },
  });
  return [tasks, isLoading, refetch];
};

export default useTasks;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    data: WhoAmI,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "WhoAmI"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return [WhoAmI, isLoading, refetch];
};

export default useUser;

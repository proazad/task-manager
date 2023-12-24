import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const SocialLogin = () => {
  const { signInWithGmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    signInWithGmail()
      .then((result) => {
        const fuser = result.user;
        const user = {
          name: fuser.displayName,
          photo: fuser.photoURL,
          email: fuser.email,
          creationTime: fuser.metadata.creationTime,
        };
        if (user) {
          axiosPublic.post("/users", user).then((res) => {
            if (res.data) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from);
            }
          });
        }
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Opps! Something Went Wrong Please Try Again`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <p
        onClick={handleGoogleSignIn}
        className="flex items-center  border justify-center py-2 text-2xl cursor-pointer hover:bg-gray-400 rounded border-primary hover:text-primary gap-5"
      >
        Continue with Google <FcGoogle />
      </p>
    </div>
  );
};

export default SocialLogin;

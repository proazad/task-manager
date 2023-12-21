import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { signInWithGmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleSignIn = () => {
    signInWithGmail()
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registraion Successfull",
            showConfirmButton: false,
            timer: 5500,
          });
          navigate(location?.state ? location?.state : "/");
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

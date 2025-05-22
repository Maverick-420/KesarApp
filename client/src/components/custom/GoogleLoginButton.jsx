import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setUserLogin } from "@/redux/slices/authSlice";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const onSuccess = async (credentialResponse) => {
    console.log("ID Token (credential):", credentialResponse.credential);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/google`,
        { token: credentialResponse.credential }
      );

      dispatch(setUserLogin(res.data));
      toast({ title: "Google Login successful" });
      navigate("/");
    } catch (error) {
      toast({ title: "Google Login failed", variant: "destructive" });
      console.error("Login Error:", error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={() =>
        toast({ title: "Google Login failed", variant: "destructive" })
      }
    />
  );
};

export default GoogleLoginButton;

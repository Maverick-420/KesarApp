import { GoogleLogin } from "@react-oauth/google";
import { Button } from "../ui/button";

const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/google`;
  };

  return (
    <Button onClick={handleLogin} variant="destructive">
      Continue with Google
    </Button>
  );
};

export default GoogleLoginButton;

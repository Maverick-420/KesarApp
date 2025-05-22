import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setUserLogin } from "@/redux/slices/authSlice";

const AuthHandler = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const user = params.get("user");
    if (token && user) {
      const parsedUser = JSON.parse(decodeURIComponent(user));
      dispatch(setUserLogin({ token, user: parsedUser }));
      navigate("/");
    }
  }, [location]);

  return null;
};

export default AuthHandler;

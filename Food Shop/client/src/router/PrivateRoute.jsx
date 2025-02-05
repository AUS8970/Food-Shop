import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("http://localhost:5000/private-route", {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 401) {
        navigate("/login"); // Redirect to login if unauthorized
      }
    };

    checkAuth();
  }, [navigate]);

  return children;
};

export default PrivateRoute;
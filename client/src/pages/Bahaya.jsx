import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

export default function BahayaPage() {
  const [cookies] = useCookies(["TOKEN"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies) {
      const userData = jwtDecode(cookies.TOKEN);
      if (userData.umur < 18) navigate("/");
    }
  });

  return (
    <div className="flex items-center justify-center text-3xl font-bold">
      Bahaya
    </div>
  );
}

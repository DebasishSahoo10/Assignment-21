import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const navItemStyle = "text-lg font-semibold tracking-wide"

export const Nav = () => {
  const location = useLocation();
  return (
    <div className="flex flex-row gap-10 mt-5">
      <Link to={"/"} className={`${navItemStyle}`} style={{ color: `${location.pathname === "/" ? "#5b21b6" : "black"}` }}>
        Patient
      </Link>
      <Link to={"/wards"} className={`${navItemStyle}`} style={{color: `${location.pathname === "/wards" ? "#5b21b6" : "black"}`}}>
        Ward
      </Link>
      <Link to={"/hospital"} className={`${navItemStyle}`} style={{color: `${location.pathname === "/hospital" ? "#5b21b6" : "black"}`}}>
        Hospital
      </Link>
    </div>
  );
};

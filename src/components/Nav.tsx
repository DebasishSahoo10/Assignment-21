import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const navItemStyle = "text-lg font-semibold tracking-wide";

export const Nav = () => {
  const location = useLocation();
  return (
    <div className="flex flex-row gap-10 mt-5">
      <Link
        to={"/"}
        className={`${navItemStyle}`}
        style={{ color: `${location.pathname === "/" ? "#5b21b6" : "black"}` }}
      >
        Volunteers
      </Link>
      <Link
        to={"/events"}
        className={`${navItemStyle}`}
        style={{
          color: `${location.pathname === "/events" ? "#5b21b6" : "black"}`,
        }}
      >
        Events
      </Link>
      <Link
        to={"/summary"}
        className={`${navItemStyle}`}
        style={{
          color: `${location.pathname === "/summary" ? "#5b21b6" : "black"}`,
        }}
      >
        Summary
      </Link>
    </div>
  );
};

// libraries
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

// styles
import "./page-title.scss";

/**
 * Tool to mapping the title page according with the URL
 * @param {string} path of url
 * @returns string of the title of the page
 */
function getTitle(path) {
  if (path === "/") return "Electronics";
  if (path.includes("getPoints")) return "Get Points";
  if (path.includes("history")) return "Your history";
  return "Electronics";
}

function PageTitle() {
  const { pathname } = useLocation();

  return useMemo(() => {
    return (
      <div className="page-title">
        <h1 className="container title">{getTitle(pathname)}</h1>
      </div>
    );
  }, [pathname]);
}

export default PageTitle;

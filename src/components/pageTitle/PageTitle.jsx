import { useMemo } from "react";
import "./page-title.scss";

function PageTitle({ title }) {
  return useMemo(() => {
    return (
      <div className="page-title">
        <h1 className="container title">{title}</h1>
      </div>
    );
  }, [title]);
}

export default PageTitle;

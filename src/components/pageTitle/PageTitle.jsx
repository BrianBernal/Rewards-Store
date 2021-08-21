import "./page-title.scss";

function PageTitle({ title, image }) {
  return (
    <div className="page-title">
      <h1 className="container title">{title}</h1>
    </div>
  );
}

export default PageTitle;

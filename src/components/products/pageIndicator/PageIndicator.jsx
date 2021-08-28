import "./page-indicator.scss";

function PageIndicator({ current = 0, total = 0 }) {
  return (
    <span className="page">
      {current} of {total} products
    </span>
  );
}

export default PageIndicator;

// components
import Header from "../../components/header/Header";
import PageTitle from "../../components/pageTitle/PageTitle";

function Template({ children }) {
  return (
    <>
      <Header />
      <PageTitle />
      <div className="container">{children}</div>
    </>
  );
}

export default Template;

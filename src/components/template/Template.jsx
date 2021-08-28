import "./template.scss";

// components
import Header from "../../components/header/Header";
import PageTitle from "../../components/pageTitle/PageTitle";

function Template({ children }) {
  return (
    <>
      <Header />
      <PageTitle />
      <main className="container">{children}</main>
    </>
  );
}

export default Template;

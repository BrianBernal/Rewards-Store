import Header from "../../components/header/Header";
import PageTitle from "../../components/pageTitle/PageTitle";
import SimpleFilter from "../../components/simpleFilter/SimpleFilter";

function Home() {
  return (
    <div>
      <Header />
      <PageTitle title="Electronics" />
      <div>
        <span>sort by: </span>
        <SimpleFilter text="Most recent" />
      </div>
    </div>
  );
}

export default Home;

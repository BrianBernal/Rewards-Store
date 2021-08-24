// components
import SimpleFilter from "../../components/simpleFilter/SimpleFilter";

function Home() {
  return (
    <div>
      <span>sort by: </span>
      <SimpleFilter text="Most recent" />
    </div>
  );
}

export default Home;

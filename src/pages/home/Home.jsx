// components
import SimpleFilter from "../../components/simpleFilter/SimpleFilter";
import Products from "./products/Products";

function Home() {
  return (
    <>
      <span>sort by: </span>
      <SimpleFilter text="Most recent" />
      <Products />
    </>
  );
}

export default Home;

import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import FeaturedProducts from "./FeaturedProducts";

function ContentWrapper() {
  return (
    <>
      {/* <!-- Main Content --> */}
      <div id="content">
        {/* <!-- Content Row Top --> */}
        <ContentRowTop />
        {/* <!--End Content Row Top--> */}
        <FeaturedProducts />
      </div>
      {/* <!-- End of MainContent --> */}
    </>
  );
}

export default ContentWrapper;

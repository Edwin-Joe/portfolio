import About from "./About";
import IntroBanner from "./IntroBanner";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#161616", height: "100vh" }}>
      <title>Portfolio📄</title>
      <TopBar />
      <IntroBanner />
      <About />
      {/* {[...Array(100)].map((_, i) => (
        <div key={i}>Test {i + 1}</div>
      ))} */}
    </div>
  );
};

export default Home;

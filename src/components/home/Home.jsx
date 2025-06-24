import TopBar from "./TopBar";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#585858" }}>
      {/* {[...Array(5)].map((_, i) => (
        <div key={i}>Test {i + 1}</div>
      ))} */}
      <TopBar />
      {[...Array(100)].map((_, i) => (
        <div key={i}>Test {i + 1}</div>
      ))}
    </div>
  );
};

export default Home;

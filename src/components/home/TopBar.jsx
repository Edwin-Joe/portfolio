import "./style.css";

const TopBar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        backgroundColor: "#161616",
        position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ paddingLeft: "2%" }}>
        <p className="title-main">
          <span style={{ color: "" }}>Port</span>
          <span className="highlight-yellow">folio</span>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          paddingRight: "10px",
        }}
      >
        <div>link1</div>
        <div>link2</div>
      </div>
    </div>
  );
};

export default TopBar;

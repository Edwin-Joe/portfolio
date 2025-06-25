import IntroBannerPerson from "../../assets/png/IntroBannerPerson.png";
import "./style.css";

const IntroBanner = () => {
  return (
    <div style={{ justifyItems: "center" }}>
      <div
        style={{
          color: "#e4e4e4",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <h1>Hello</h1>
          <h1>
            I'm <span className="highlight-yellow">EDWIN JOE XAVIER</span>
          </h1>
          <h2 style={{ width: "90%" }}>
            Junior ReactJS developer | Low code developer | Playwright
            Automation tester
          </h2>
          <h3 style={{ fontWeight: "normal", width: "80%" }}>
            ReactJS | HTML | CSS | JS | Tailwind | Git | Aspiring software
            engineer with current focus on frontend web development
          </h3>
          <button className="primary-button">Resume</button>{" "}
          <button>Contact</button>
        </div>
        <div
          style={{
            backgroundImage: `url(${IntroBannerPerson})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "550px",
            height: "400px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default IntroBanner;

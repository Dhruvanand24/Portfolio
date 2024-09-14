import React from "react";

// Update the Bullets component to accept a single tech item
const Bullets = ({ tech }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        gap: "8px",
        border: "1px solid #c770f0",
        padding: "2px 10px",
        borderRadius: "4px",
        margin: "2px",
        cursor: "pointer",
      }}
    >
      <span>{tech}</span>
    </div>
  );
};

const ExperienceCard = ({ props }) => {
  const { Company, Role, Duration, Location, Techstack, Description } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "transparent",
        gap: "8px",
        border: "1px solid #c770f0",
        borderRadius: "4px",
        marginBottom: "30px",
        flexWrap: "wrap", // Add this line for wrapping
        wordWrap: "break-word", // Ensure long words break
      }}
    >
      <h1 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
        <span className="purple">Company:</span> <span>{Company}</span>
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          width: "100%",
        }}
      >
        <h2 style={{ fontSize: "1.2rem", margin: "5px 0" }}>
          <span className="purple">Role: </span>
          <span style={{ fontWeight: "normal" }}>{Role}</span>
        </h2>
        <h2 style={{ fontSize: "1.2rem", margin: "5px 0" }}>
          <span className="purple">Location: </span>
          <span style={{ fontWeight: "normal" }}>{Location}</span>
        </h2>
        <h2 style={{ fontSize: "1.2rem", margin: "5px 0" }}>
          <span className="purple">Duration: </span>
          <span style={{ fontWeight: "normal" }}>{Duration}</span>
        </h2>
        <h2 style={{ fontSize: "1.2rem", margin: "5px 0" }}>
          <span className="purple">TechStack:</span>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
            {Techstack.map((tech, index) => (
              <Bullets key={index} tech={tech} />
            ))}
          </div>
        </h2>
        <div
          style={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "transparent",
            width: "100%",
          }}
        >
          <ul
            style={{
              listStyleType: "circle",
              paddingLeft: "20px",
              opacity: "70%",
            }}
          >
            {Description.map((item, index) => (
              <li key={index}>
                {item.Main}
                {item.Mylink && (
                  <a
                    href={item.Mylink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "5px" }}
                  >
                    {item.Mylink}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

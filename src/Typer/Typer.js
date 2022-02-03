import React from "react";
import Typography from "@mui/material/Typography";
import Typer from "./typerEffect.js";

function Typed() {
  return (
    <>
      <Typography variant="h1">Hi, I’m Jhon Inalien</Typography>

      <Typography variant="h2">
        a{" "}
        <span className="typer-text">
          <Typer
            loop={true}
            speed={200}
            delay={2000}
            words={[
              "Software Engineer.",
              "Front End Developer.",
              "SDET.",
              "Freelancer.",
            ]}
          />
        </span>
      </Typography>
    </>
  );
}

export default Typed;

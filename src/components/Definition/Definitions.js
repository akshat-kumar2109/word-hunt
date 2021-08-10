import { light } from "@material-ui/core/styles/createPalette";
import React from "react";
import "./Definitions.css";

function Definitions({ word, category, meanings, lightMode }) {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            width: "100%",
          }}
          controls
        >
          Your Browser doesn't support audio element.
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search.</span>
      ) : (
        meanings.map((meaning) =>
          meaning.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{
                  backgroundColor: lightMode ? "#3b5360" : "white",
                  color: lightMode ? "white" : "black",
                  transition: "all 0.5s linear",
                }}
              >
                <b>{def.definition}</b>
                <hr
                  style={{
                    width: "100%",
                    border: "none",
                    borderTop: `1.5px solid ${lightMode ? "white" : "black"}`,
                    transition: "all 0.5s linear",
                  }}
                />
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((synonym) => `${synonym}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}

export default Definitions;

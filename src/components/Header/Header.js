import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

function Header(props) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: props.lightMode ? "#000" : "#fff",
      },
      type: props.lightMode ? "light" : "dark",
    },
  });

  const handleChange = (language) => {
    props.setCategory(language);
    props.setWord("");
  };

  return (
    <div className="header">
      <span className="title">{props.word ? props.word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a word"
            label="Outlined"
            value={props.word}
            onChange={(e) => props.setWord(e.target.value)}
            variant="outlined"
          />

          <TextField
            className="select"
            select
            label="Language"
            value={props.category}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            variant="outlined"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";

// Material Stuff
import { AppBar, Toolbar, Typography, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title} noWrap>
          <strong>ශ්‍රී ලංකාවේ නව කොරෝනා ව්‍යාප්තිය (සජීව දත්ත)</strong>
        </Typography>
        <Typography style={{ flex: 0.8 }}></Typography>

        <MenuItem component={Link} to="/">
          පුවරුව (Dashboard)
        </MenuItem>
        <MenuItem component={Link} to="/hospitals" style={{ flex: 1 }}>
          රෝහල් තතු (Hospital Status)
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  root: {
    textDecoration: "none",
    display: "block"
  },
  title: {
    display: "block",
    marginRight: 20
  }
});

export default Navbar;

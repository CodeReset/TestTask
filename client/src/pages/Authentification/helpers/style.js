import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root_input: {
    width: "100%",
    maxWidth: "100%",
    marginTop: 20,
    fontFamily: "Montserrat-Regular",
    "& input": {
      fontFamily: "Montserrat-Regular",
    },
    "& label": {
      fontFamily: "Montserrat-Regular",
    },
  },
  root_button: {
    background: "#3F51B5",
    marginTop: 20,
    padding: "13px 40px",
    marginLeft: "auto",
    display: "block",
    marginRight: "auto",
    color: "#fff",
    fontFamily: "Montserrat-Regular",
    fontWeight: 600,
    fontSize: 13,
    border: "1px solid transparent",
    "&:hover": {
      background: "#fff",
      color: "#333",
      border: "1px solid #3F51B5",
    },
  },
});

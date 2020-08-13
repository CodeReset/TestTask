import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    height: 500,
    width: 500,
    outline: "none",
  },
  heading_root: {
    textAlign: "center",
    marginTop: 30,
    fontFamily: "Montserrat-Regular",
    fontWeight: 600,
    fontSize: 25,
  },
  date_input: {
    width: 250,
    maxWidth: "100%",
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    border: "1px solid #C4C4C4",
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
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
  wrapperModal: {
    width: "90%",
    margin: "50px auto 0 auto",
  },
});

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    paddingTop: 10,
    width: "90%",
    margin: "0 auto",
  },
  signin_bottom: {
    "& span": {
      fontFamily: "Montserrat-Regular",
    },
  },
  headigng_auth: {
    textAlign: "left",
    padding: "10px 0px",
    width: 240,
    fontSize: 35,
    fontFamily: "Montserrat-Regular",
    fontWeight: "600",
  },
});

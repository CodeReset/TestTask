import React from "react";

import PropTypes from "prop-types";

import { Formik } from "formik";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./style";
import { FormSchema } from "../FormCreator/helper/FormSchema";

const ModalEdit = ({ open, handleClose, editElement, editCurrentWorkout }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.heading_root}>
              Transition modal
            </h2>
            <div className={classes.wrapperModal}>
              <Formik
                initialValues={{
                  date: editElement.date,
                  trainType: editElement.type,
                  km: editElement.km,
                }}
                validationSchema={FormSchema}
                onSubmit={(values, action) => {
                  editCurrentWorkout(
                    editElement.id,
                    values.date,
                    values.trainType,
                    values.km
                  );
                }}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit}>
                    <input
                      type="date"
                      value={props.values.date}
                      onChange={props.handleChange("date")}
                      className={classes.date_input}
                    />
                    <TextField
                      required
                      label="TrainType"
                      variant="outlined"
                      value={props.values.trainType}
                      onChange={props.handleChange("trainType")}
                      className={classes.root_input}
                    />
                    <TextField
                      required
                      label="km"
                      variant="outlined"
                      value={props.values.km}
                      type="number"
                      onChange={props.handleChange("km")}
                      className={classes.root_input}
                    />
                    <Button className={classes.root_button} type="submit">
                      CREATE
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

ModalEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  editElement: PropTypes.object.isRequired,
  editCurrentWorkout: PropTypes.func.isRequired,
};

export default ModalEdit;

import React from "react";

import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateIcon from "@material-ui/icons/Create";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style";

const columns = [
  { id: "date", label: "Дата", minWidth: 170, sort_info: "SHOW_SORTED_DATE" },
  { id: "type", label: "Тип тренировки", minWidth: 170, sort_info: "SHOW_ALL" },
  {
    id: "km",
    label: "Километраж",
    minWidth: 170,
    align: "left",
    sort_info: "SHOW_SORTED_KM",
  },
  {
    id: "change",
    label: "Редактировать",
    minWidth: 170,
    align: "left",
  },
  {
    id: "remove",
    label: "",
    minWidth: 170,
    align: "right",
  },
];

const TableWorkout = ({
  rows,
  deleteItem,
  sortWorkouts,
  filterValue,
  handleChangeFilter,
  handleKeyPressFilter,
  handleOpen,
}) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  onClick={() => {
                    sortWorkouts(column.sort_info);
                  }}
                >
                  {column.label && column.id !== "remove" ? (
                    <div
                      style={{
                        display: "flex",
                        cursor: "pointer",
                        minWidth: column.minWidth,
                      }}
                    >
                      {column.label}
                      {column.label &&
                        column.id !== "type" &&
                        column.sort_info && <ExpandMoreIcon />}
                    </div>
                  ) : (
                    <TextField
                      type="text"
                      placeholder="Filter by type"
                      value={filterValue}
                      onChange={(e) => handleChangeFilter(e.target.value)}
                      onKeyDown={(e) => handleKeyPressFilter(e)}
                    />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id + "123"} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                          {column.id === "change" && (
                            <CreateIcon
                              onClick={() =>
                                handleOpen(row.date, row.type, row.km, row._id)
                              }
                              className={classes.pointerEvents}
                            />
                          )}
                          {column.id === "remove" && (
                            <DeleteForeverIcon
                              className={classes.pointerEvents}
                              onClick={() => {
                                deleteItem(row._id);
                              }}
                            />
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

TableWorkout.propTypes = {
  rows: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
  handleKeyPressFilter: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default TableWorkout;

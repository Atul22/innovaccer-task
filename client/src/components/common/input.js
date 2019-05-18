import React from "react";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";

const Input = ({ label, name, ...rest }) => {
  return (
    <React.Fragment>
      <TextField
        id={name}
        name={name}
        label={label}
        {...rest}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
    </React.Fragment>
  );
};

export default Input;

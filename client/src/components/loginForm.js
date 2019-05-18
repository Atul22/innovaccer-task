import React, {Component} from 'react';
import Joi from "joi-browser";
import Input from "./common/input";
import { unstable_Box as Box } from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import auth from '../services/authService';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});


class LoginForm extends Component {
	state = {
		data: {
		    username: "",
	    password: ""
	},
	errors: {}
	};

	/**
	* Joi schema for form inputs validation
	*/
	schema = {
	username: Joi.string()
	  .regex(/^[_ a-zA-Z0-9]+$/)
	  .required()
	  .min(3)
	  .error(new Error("min 3 characters, only _ allowed")),

	password: Joi.string()
	  .required()
	  .regex(/^[_ a-z0-9]+$/)
	  .min(3)
	  .error(new Error("min 3 characters, only _ allowed"))
	};

	/**
	* for validating the form
	* this is used to disable the login button if form inputs have any errors
	*/
	validate = () => {
	const options = { abortEarly: false };
	const { error } = Joi.validate(this.state.data, this.schema, options);
	if (!error) return null;

	const errors = error.message;
	return errors;
	};

	/**
	* for validating each input field
	* and show the errors if input validation fails
	*/
	validateInput = ({ name, value }) => {
	const obj = { [name]: value };
	const schema = { [name]: this.schema[name] };
	const { error } = Joi.validate(obj, schema);
	return error ? error.message : null;
	};

	/**
   * controlled usage of input
   * callback for onChange
   */

	handleInput = ({ currentTarget: input }) => {
		const { name, value } = input;
		const errors = { ...this.state.errors };

		const errorMessage = this.validateInput(input);
		if (errorMessage) errors[name] = errorMessage;
		else delete errors[name];

		const data = { ...this.state.data };
		data[name] = value;
		this.setState({ data, errors });
	};

  /**
   * Trigger form submit and start login actions
   */

	handleClick = async e => {
		try {
			const { data } = this.state;
			await auth.login(data.username, data.password);
		} catch (error) {
			const errors = { ...this.state.errors };
			errors.username = error.response.data.errorMessage;
		}
	};

	render() {
		const { classes } = this.props;
    	const { data, errors } = this.state;
		return (
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)"
				}}
			>
				<FormControl className={classes.margin}>
	          		<span style={{ textAlign: "center", fontSize: 25 }}>Sign in</span>
					<Box m={2} />

					<Input
					    name="username"
					    label="Username"
					    type="text"
					    value={data.username}
					    onChange={this.handleInput}
					    error={errors.username}
					    helperText={errors.username}
					    className={classes.margin}
					/>

					<Box m={1} />

					<Input
					    name="password"
					    label="Password"
					    type="password"
					    value={data.password}
					    onChange={this.handleInput}
					    error={errors.password}
					    helperText={errors.password}
					    className={classes.margin}
					/>

					<Box m={2} />

					<Button
					    variant="contained"
					    color="primary"
					    disabled={this.validate()}
					    onClick={this.handleClick}
					    className={classes.button}
					>
					    Login
					</Button>
		        </FormControl>
			</div>
		)
	}
}

export default withStyles(styles)(LoginForm);

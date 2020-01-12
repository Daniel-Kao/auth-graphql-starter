import React, { Component } from "react";
import Authform from "./AuthForm";
import { graphql } from "react-apollo";
import mutation from "../mutations/signup";
import query from "../queries/CurrentUser";

class SignupForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({ variables: { email, password } });
  }
  render() {
    return (
      <div>
        <h3>Sign UP</h3>
        <Authform onSubmit={this.onSubmit.bind(this)} errors={[]} />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);

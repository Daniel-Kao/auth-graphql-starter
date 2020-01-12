import React from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";
import mutation from "../mutations/logout";

const Header = props => {
  const { loading, user } = props.data;
  function onLogoutClick() {
    props.mutate({
      refetchQueries: [{ query }]
    });
  }
  console.log(props);
  function renderButtons() {
    if (loading) {
      return <div></div>;
    }
    if (user) {
      return (
        <li>
          <a onClick={onLogoutClick}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Singup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default graphql(mutation)(graphql(query)(Header));

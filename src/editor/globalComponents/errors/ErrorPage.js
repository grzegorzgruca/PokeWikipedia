import { Link } from "react-router-dom";

function ErrorPage(props) {
  return (
    <div className="errorPage">
      <span className="errorPage__text">ERROR 404</span>
      <span className="errorPage__text">Not found</span>
      <Link className="errorPage__btn" to="/">
        Return to Home Page
      </Link>
    </div>
  );
}

export default ErrorPage;

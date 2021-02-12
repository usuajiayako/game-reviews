import { Link } from "@reach/router";

export const ErrorPage = () => {
  return (
    <div>
      <h2>Sorry, No Page Found.</h2>
      <Link to="/">Go to the main page</Link>
    </div>
    );
}
 
export default ErrorPage;

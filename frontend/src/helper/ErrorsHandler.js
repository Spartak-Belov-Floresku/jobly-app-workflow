/** Presentational component for showing bootstrap-style alerts.
 *
 * { LoginForm, SignUpForm, UserForm } -> ErrorsHandler
 **/
const ErrorsHandler = ({ type = "danger", messages = [] }) => {

  return (
      <div className={`alert alert-${type}`} role="alert">
        {messages.map(error => (
            <p className="mb-0 small" key={error}>
              {error}
            </p>
        ))}
      </div>
  );
}

export default ErrorsHandler;

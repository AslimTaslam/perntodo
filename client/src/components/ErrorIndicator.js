const ErrorIndicator = () => {
  const onRefresh = () => {
    window.location = '/';
  }
  return (
    <div>
      <h1 className="text-warning text-center">Oups</h1>
      <p className="text-center text-secondary">Something has terrebly wrong</p>
      <button
	className="btn btn-warning mt-2 text-white"
	onClick={onRefresh}
      >Refresh</button>
    </div>
  );
}

export default ErrorIndicator;

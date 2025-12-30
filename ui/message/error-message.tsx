const ErrorMessage = ({ message }: { message: string }) => (
  <div
    className="bg-red-50 text-red-600 text-xs p-2 rounded-lg text-center border border-red-100"
    role="alert"
  >
    <span>{message}</span>
  </div>
);

export default ErrorMessage;

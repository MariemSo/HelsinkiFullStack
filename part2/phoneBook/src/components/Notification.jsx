// eslint-disable-next-line react/prop-types
const Notification = ({ text, isError }) => {
  if (text === null) {
    return null;
  }

  return <div className={isError ? "error" : "message"}>{text}</div>;
};

export default Notification;

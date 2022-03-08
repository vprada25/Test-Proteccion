import PropTypes from "prop-types";

const Timer = ({date}) => {
  return (
    <div>
      <p>
        {date.toLocaleString("es-co", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        })}
      </p>
    </div>
  );
};


Timer.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default Timer;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GlanceItem = props => {
  return (
    <>
      <motion.div
        initial={props.animation === "none" ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`bar__item ${props.size === "small" && "bsmall"} ${
          props.size === "large" && "blarge"
        } ${props.size === "full" && "bfull"}`}
        style={{ background: props.color }}>
        {props.header}
        {props.subheader && <p>{props.subheader}</p>}
        {props.link && (
          <Link
            to={`/timetable?class=${props.link.class}&program=${props.link.program}&color=${props.link.color}`}>
            <button className="btn bar__item--btn">{props.link.text}</button>
          </Link>
        )}
        {props.a && (
          <a href={props.a.href}>
            <button className="btn bar__item--btn">{props.a.text}</button>
          </a>
        )}
        {props.icon && (
          <img src={props.icon} className="bar__icon" alt="" height="150" />
        )}
      </motion.div>
    </>
  );
};

export default GlanceItem;

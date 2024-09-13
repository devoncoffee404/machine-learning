import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BlogCard(props) {
  return (
    <div className="card-new" key={props.id}>
      <Link to={props.path} className="card-link">
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
        {/* <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div> */}
      </Link>
    </div>
  );
}

BlogCard.propTypes = {
  id: PropTypes.number,
  path: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default BlogCard;

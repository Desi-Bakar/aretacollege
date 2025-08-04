import * as React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data }) => (
  <div className="columns is-multiline is-centered">
    {data.map((price) => (
      <div key={price.plan} className="column is-one-third">
        <section className="section">
          <div className="box has-background-light has-text-centered"
            style={{ width: "250px", height: "450px" }}
          >  
            <h4 className="has-text-weight-semibold is-size-4 mb-2">
              {price.plan}
            </h4>
            <h2 className="is-size-4 has-text-weight-bold has-text-primary">
              Rp {price.price}
            </h2>
            <p className="has-text-weight-semibold is-size-5">
              {price.description}
            </p>
            <ul className="has-text-left ml-5 mt-3">
              {price.items.map((item, index) => (
                <li key={index} className="is-size-5">{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    ))}
  </div>
);


Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;

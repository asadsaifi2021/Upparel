import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="./img/Categories/sale.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/7">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="./img/Categories/women.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="./img/Categories/newseason.jpg"
            alt=""
          />
          <button>
            <Link to="/products/8" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="./img/Categories/men.jpg"
                alt=""
              />
              <button>
                <Link to="/products/2" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="./img/Categories/accessories.jpg"
                alt=""
              />
              <button>
                <Link to="/products/9" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="./img/Categories/shoes.jpg"
            alt=""
          />
          <button>
            <Link to="/products/7" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
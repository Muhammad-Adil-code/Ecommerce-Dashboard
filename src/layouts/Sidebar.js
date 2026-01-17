import MetisMenu from "@metismenu/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [loveEmoji, setLoveEmoji] = useState(false);
  const [doc, setDoc] = useState();

  useEffect(() => {
    setDoc(window);
  }, [doc]);

  let path = doc && doc.location.pathname;
  path = path && path.split("/");
  path = path && path[path.length - 1];

  // Route arrays for active state detection
  let dashboard = ["", "analytics"],
    ecommerce = [
      "orders-list",
      "order-detail",
      "customer-list",
      "apps/ecom/product-grid",
      "apps/ecom/product-list",
      "apps/ecom/product-detail",
      "apps/ecom/product-order",
      "apps/ecom/checkout",
      "apps/ecom/invoice",
      "apps/ecom/customers",
    ],
    reviews = ["reviews"];

  return (
    <div className="deznav">
      {doc && (
        <div className="deznav-scroll">
          <MetisMenu className="metismenu" id="menu">
            {/* Dashboard - Single link, no submenu */}
            <li className={`${dashboard.includes(path) ? "mm-active" : ""}`}>
              <Link href="/" className="ai-icon">
                <i className="flaticon-025-dashboard" />
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>

            {/* eCommerce - Orders, Customers, Inventory */}
            <li className={`${ecommerce.includes(path) ? "mm-active" : ""}`}>
              <a className="has-arrow ai-icon c-pointer" aria-expanded="false">
                <i className="flaticon-050-info" />
                <span className="nav-text">eCommerce</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link
                    href="/orders-list"
                    className={`${path === "orders-list" ? "mm-active" : ""}`}
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customer-list"
                    className={`${path === "customer-list" ? "mm-active" : ""}`}
                  >
                    Customers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apps/ecom/product-grid"
                    className={`${path === "apps/ecom/product-grid" ? "mm-active" : ""
                      }`}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apps/ecom/invoice"
                    className={`${path === "apps/ecom/invoice" ? "mm-active" : ""
                      }`}
                  >
                    Invoice
                  </Link>
                </li>
              </ul>
            </li>

            {/* Analytics - Single link */}
            <li className={`${path === "analytics" ? "mm-active" : ""}`}>
              <Link href="/analytics" className="ai-icon">
                <i className="flaticon-041-graph" />
                <span className="nav-text">Analytics</span>
              </Link>
            </li>

            {/* Reviews - Single link */}
            <li className={`${reviews.includes(path) ? "mm-active" : ""}`}>
              <Link href="/reviews" className="ai-icon">
                <i className="flaticon-086-star" />
                <span className="nav-text">Reviews</span>
              </Link>
            </li>
          </MetisMenu>

          <div className="copyright">
            <p>
              <strong>eCommerce Dashboard</strong> © {new Date().getFullYear()}{" "}
              All Rights Reserved
            </p>
            <p>
              Made with{" "}
              <span
                className={`${loveEmoji ? "heart heart-blast" : "heart"}`}
                onClick={() => setLoveEmoji(!loveEmoji)}
              ></span>{" "}
              by Muhammad Adil
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

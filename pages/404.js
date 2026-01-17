import Link from "next/link";
import ErrorsLayout from "../src/layouts/ErrorsLayout";

function Error404() {
    return (
        <div className="col-md-5">
            <div className="form-input-content text-center error-page">
                <h1 className="error-text fw-bold">404</h1>
                <h4>
                    <i className="fa fa-exclamation-triangle text-warning" /> The page
                    you were looking for is not found!
                </h4>
                <p>
                    You may have mistyped the address or the page may have moved.
                </p>
                <div>
                    <Link href="/" className="btn btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

Error404.layout = "blank";

export default Error404;

import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      Sorry{" "}
      <span role="img" aria-label="Pensive emoji">
        😔
      </span>{" "}
      we couldn’t find what you were looking for.
    </Layout>
  );
};

export default NotFoundPage;

import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { GlobalStyle } from "../components/IndexLayout";
import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>MyScator</title>
      </Head>
      <GlobalStyle />
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));

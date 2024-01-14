import React from 'react';
import Layout from '../../layout';

const ErrorPageIndex = () => {
  return (
    <Layout>
      <div className="errorpage">
        <div className="error-wrapper">
          <div className="error-details">
            <h1 className="code">404</h1>
            <p className="error-message">Page Not Found</p>
          </div>
          <div className="lost">
            <img src="/images/lost.png" alt="Lost" className="error-lost" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPageIndex;

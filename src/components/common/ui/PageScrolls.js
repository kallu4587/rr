import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

export const PageTopOnRouteChange = withRouter(({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line
  }, []);

  return <Fragment>{children}</Fragment>;
});

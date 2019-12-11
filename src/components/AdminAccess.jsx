import React from 'react';

export const AdminAccess = ({ children }) => {
  const authorized = React.useMemo(() => !!localStorage.getItem('auth'), []);
  return authorized ? <>{children}</> : null;
};
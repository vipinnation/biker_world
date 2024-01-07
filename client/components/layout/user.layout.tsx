import React from 'react';
import UserNavbarComponent from '../ui/user-navbar.component';

type Props = {
  children?: React.ReactNode;
};

const UserLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-1">
        <UserNavbarComponent />
        {children}
      </div>
    </div>
  );
};

export default UserLayout;

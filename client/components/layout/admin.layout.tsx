'use client';
import React from 'react';
import AdminNavbar from '../ui/admin-navbar.component';

type Props = {
  children?: React.ReactNode;
};

const AdminLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-1">
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;

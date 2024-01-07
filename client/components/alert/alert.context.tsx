'use client';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Toaster, toast } from 'sonner';

interface SnackbarContextData {
  toastMessage: any;
}

const SnackbarContext = createContext<SnackbarContextData | undefined>(undefined);

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const toastMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info') => {
    try {
      if (type == 'error')
        toast.error(message, {
          className: 'text-2xl',
          duration: 5000
        });
      else if (type == 'success') toast.success(message);
      else if (type == 'info') toast.info(message);
      else if (type == 'warning') toast.warning(message);
    } catch (error) {}
  };

  return (
    <SnackbarContext.Provider value={{ toastMessage }}>
      {children}
      <div className="!text-lg">
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            unstyled: true,
            classNames: {
              error: 'bg-red-400 flex items-center rounded-md px-4 py-3 text-lg w-full mx-2',
              success: 'text-green-400 flex items-center rounded-md px-4 py-3 text-lg w-full mx-2',
              warning: 'text-yellow-400 flex items-center rounded-md px-4 py-3 text-lg w-full mx-2',
              info: 'bg-blue-400 flex items-center rounded-md px-4 py-3 text-lg w-full mx-2'
            }
          }}
        />
      </div>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextData => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

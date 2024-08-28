import React from 'react';
import { Suspense } from 'react';
import Navigation from './navigation/Navigation';

const styles ={
    maxWidth: '1440px',
    margin: '0 auto', 
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

   
}

export const Layout = ({children}) => {
    return (
        <div style={styles}>
            <Navigation />
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </div>
    );
};

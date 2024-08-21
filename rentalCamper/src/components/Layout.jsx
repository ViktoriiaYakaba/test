import { Suspense } from 'react';
import Navigation from './navigation/Navigation';

const styles ={
    maxWidth: '1000px',
    margin: '0 auto', 
    padding: '0 16px',
   
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

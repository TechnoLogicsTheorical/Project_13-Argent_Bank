import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

export default function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>

    )
}
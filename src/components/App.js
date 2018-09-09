import React from 'react';
import HeaderView from './header/header-view'
import BodyView from './body/body-view'
import Footer from './footer/footer'
import ErrorContainer from './error/error-container'


const App = () => (
    <div className="grid-wrapper">
    <ErrorContainer/>
    <HeaderView/>
    <BodyView/>
    <Footer/>
    </div>

);

export default App;
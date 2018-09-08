import React from 'react';
import HeaderView from './header/header-view'
import BodyView from './body/body-view'
import Footer from './footer/footer'


const App = () => (
    <div className="grid-wrapper">
    <HeaderView/>
    <BodyView/>
    <Footer/>
    </div>

);

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Info from './components/Info';
import Tutors from './components/Tutors';
import Form from './components/Form';
import Footer from './components/Footer';


ReactDOM.render(
    <Header/>,
  document.getElementById('header')
);



ReactDOM.render(
  <Info/>,
  document.getElementById('info')
);

ReactDOM.render(
  <Tutors/>,
  document.getElementById('tutors')
)

ReactDOM.render(
  <Form/>,
  document.getElementById('form')
);

ReactDOM.render(
  <Footer/>,
  document.getElementById('footer')
);
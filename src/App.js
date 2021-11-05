import './App.css';
import React, { useState, useEffect } from 'react';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';
import StudentForm from './components/StudentForm';

function App () {
   return (
      <Layout>
        <Navbar/>
        <StudentForm />
        <List hoverable/>
        <Footer />
      </Layout>
    );
  }

export default App;

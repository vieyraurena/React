import './App.css';
import React from 'react';
// import { students } from './students';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      students: {},
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://students.hasura.app/api/rest/students', {
      method: 'GET',
      headers: {
        'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
      }
    }).then(response => response.json())
      .then(result => {
        this.setState({
          students: result.students,
          isLoaded: true
      })
    })
  }

  render(){
    const { students, isLoaded } = this.state
    return (
      <Layout>
        <Navbar/>
        {!isLoaded ? <p>loading...</p> : <List students={students} hoverable/>}
        <Footer />
      </Layout>
    );
  }
}

export default App;

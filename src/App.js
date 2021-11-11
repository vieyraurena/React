import './App.css';
import React from 'react';
import StudentList from './routes/StudentList'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';
import StudentForm from './routes/StudentForm';
import { Routes, Route, Outlet } from 'react-router-dom'
import Student from './routes/Student';

function App () {
   return (
     <>
      <Layout>
      <Navbar/>
      <Routes>
          <Route path='/' element={<StudentList hoverable/>} />
          <Route  path='/students' element={<StudentList hoverable />} />
          <Route  path='/student/:StudentId' element={<Student />} />
          <Route  path='/addStudent' element={<StudentForm />} />
          <Route  path='/updateStudent/:StudentId' element={<StudentForm />} />
            {/* <Route path='students' element={<StudentList hoverable />} >
              <Route path=':StudentId' element={<Student />}/>
            </Route>
            <Route path='addStudent' element={<StudentForm />} />
          </Route> */}
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
            }
          />
        </Routes>

        <Footer />
      </Layout>
    </>
    );
  }

export default App;

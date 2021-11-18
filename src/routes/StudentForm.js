import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import useAlert from "../hooks/useAlert"

const StudentForm = () => {
    const [idInput, setIdInput] = useState()
    const [nameInput, setNameInput] = useState('')
    // const [alert, setAlert] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { sendAlert } = useAlert()

    const insertStudent = async (id, name) => {
        setIsLoading(true)
        return fetch(`${process.env.REACT_APP_API_URL}student`, {
          method: 'POST',
          headers: {
            'x-hasura-admin-secret': process.env.REACT_APP_HASURA_SECRET
          },
          body: JSON.stringify({"id": id, "name": name})
      }).then(response => response.json())
      .then(data => {
        setIsLoading(false)
          if (data.insert_students_one === null)  {
                sendAlert({type: 'warning', message: 'student is repeated'})
            } else {
              sendAlert({type: 'success', message: 'new student added'})
                setIdInput(0)
                setNameInput('')
                navigate('/')
            }
      })
       .catch(error => console.log(error))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()
        insertStudent(idInput, nameInput)
      }

      // useEffect(() => {
      //   const alertTimer = setTimeout(() => {
      //       setAlert('')
      //   }, 5000)
      //   return () => clearTimeout(alertTimer)
      // }, [alert])

    return (
        <>
            <h1>Add Student</h1>
            <form onSubmit={handleSubmit}>
                <input required value={idInput} type="number" name="id" placeholder="id" onChange={e => setIdInput(e.target.value)}></input>
                <input required value={nameInput} type="text" name="name" placeholder="name" onChange={e => setNameInput(e.target.value)}></input>
                <button disabled={isLoading} type="submit" value="submit">{ isLoading ? 'Loading' : 'Add student'}</button>
            </form>
        </>
    )
}

export default StudentForm
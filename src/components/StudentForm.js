import { useState, useEffect } from "react"
import AlertTag from "./AlertTag"

const StudentForm = () => {
    const [idInput, setIdInput] = useState()
    const [nameInput, setNameInput] = useState('')
    const [alert, setAlert] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const insertStudent = async (id, name) => {
        setIsLoading(true)
        return fetch(`https://students.hasura.app/api/rest/student`, {
          method: 'POST',
          headers: {
            'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
          },
          body: JSON.stringify({"id": id, "name": name})
      }).then(response => response.json())
      .then(data => {
        setIsLoading(false)
          if (data.insert_students_one === null)  {
                setAlert('ID de estudiante repetido')
            } else {
                setAlert('Nuevo estudiante ingresado')
                setIdInput(0)
                setNameInput('') 
            }
      })
       .catch(error => console.log(error))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()
        insertStudent(idInput, nameInput)
        // setStudents({students: students})
      }

      useEffect(() => {
        
        const alertTimer = setTimeout(() => {
            setAlert('')
        }, 5000)
        return () => clearTimeout(alertTimer)
      }, [alert])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input required value={idInput} type="number" name="id" placeholder="id" onChange={e => setIdInput(e.target.value)}></input>
                <input required value={nameInput} type="text" name="name" placeholder="name" onChange={e => setNameInput(e.target.value)}></input>
                <button disabled={isLoading} type="submit" value="submit">{ isLoading ? 'Loading' : 'Add student'}</button>
            </form>
            { alert !== '' ? <AlertTag message={alert} /> : ''}
        </>
    )
}

export default StudentForm
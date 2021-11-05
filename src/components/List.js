import { useState, useEffect } from 'react'

function List(props) {
    const [students, setStudents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetchStudents()
    }, [alert])

    const fetchStudents = () => {
        fetch(`https://students.hasura.app/api/rest/students`, {
        method: 'GET',
        headers: {
            'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
        }
        }).then(response => response.json())
        .then(result => {
            setIsLoaded(true)
            setStudents(result.students)
        })
    }

    if (!isLoaded) return <p>loading...</p>
    
    return (
        <div style={{flex: "1 0 auto"}}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        {/* <th>Is Present?</th> */}
                    </tr>
                </thead>
                <tbody >
                    {
                        students.map(student => 
                            <tr className={props.hoverable ? 'hoverable' : ''} key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                {/* <td><input type="checkbox" checked={isChecked} onChange={handleOnChange} style={{margin:"auto"}}/></td> */}
                            </tr>
                        )
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        {/* <td>Presentes: {count}</td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default List
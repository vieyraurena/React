import { useState, useEffect } from 'react'

function List(props) {
    const [students, setStudents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetchStudents()
    })

    const fetchStudents = () => {
        fetch(`${process.env.REACT_APP_API_URL}students`, {
        method: 'GET',
        headers: {
            'x-hasura-admin-secret': process.env.REACT_APP_HASURA_SECRET
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
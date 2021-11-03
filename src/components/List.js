import { useState } from 'react'

function List(props) {
    const [count, setCount] = useState(0)
    const [isChecked, setIsChecked] = useState(false)

    const handleOnChange = () => setIsChecked(!isChecked)
    
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
                        props.students.map(student => 
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
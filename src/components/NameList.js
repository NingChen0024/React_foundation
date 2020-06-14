import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:28,
            skill:'Vue'
        }
    ]

    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList = names.map((name,index) => <div key={index} >{index}.{name}</div>)

    // const personList = persons.map(person => (
    //     <h2>
    //         I am {person.name}. I am {person.age} years old and I know {person.skill}
    //     </h2>
    // ))


    const personList = persons.map(person => (
       <Person key={person.id} person = {person}/>
    ))

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList


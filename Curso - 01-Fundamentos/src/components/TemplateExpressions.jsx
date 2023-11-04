const TemplateExpressions = () => {

    const obj = [
        {
            name: "Wanderson",
            age: 22,
            job: "Programmer"
        },
        {
            name: "David",
            age: 24,
            job: "Programmer"
        }
    ]

    return (
        <div>
            {
                obj.map( (person) => {
                    return (<p key={person.name}>{person.name}</p>)
                })  
            }
            
            <p>{obj[0].age}</p>
        </div>
    )
}

export default TemplateExpressions;
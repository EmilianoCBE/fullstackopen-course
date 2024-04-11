export const Persons = ({ filter, persons, deletePerson }) => {
  return (
    <ul style={{'listStyle': 'none'}}>
      {filter !== ""
        ? persons.map((person) =>
            person.name.toLowerCase().includes(filter) ? (
              <li className='person' key={person.id}>
                <span>{person.name} {person.number} </span>
                <button onClick={() => deletePerson(person.id)}> Delete </button>
              </li>
            ) : (
              ""
            )
          )
        : persons.map((person) => (
              <li className='person' key={person.id}>
                <span>{person.name} {person.number} </span>
                <button onClick={() => deletePerson(person.id)}> Delete </button>
              </li>
          ))}
    </ul>
  );
};

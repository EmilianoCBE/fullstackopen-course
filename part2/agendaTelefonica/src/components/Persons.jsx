export const Persons = ({ filter, persons, deletePerson }) => {
  return (
    <ul style={{'listStyle': 'none'}}>
      {filter !== ""
        ? persons.map((person) =>
            person.name.toLowerCase().includes(filter) ? (
              <li key={person.id}>
                {person.name} {person.number}
              </li>
            ) : (
              ""
            )
          )
        : persons.map((person) => (
              <li key={person.id}>
                <span>{person.name} {person.number} </span>
                <button onClick={() => deletePerson(person.id)}> Delete </button>
              </li>
          ))}
    </ul>
  );
};

export const Persons = ({filter, persons}) => {
  return (
    <ul>
      {filter !== ""
        ? persons.map((person) =>
            person.name.toLowerCase().includes(filter) ? (
              <li key={person.name}>
                {person.name} {person.number}
              </li>
            ) : (
              ""
            )
          )
        : persons.map((person) => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
    </ul>
  );
};

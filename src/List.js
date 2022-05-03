import React from "react";

const List = ({ people, setPeople }) => {
  function deletePerson(id) {
    const newList = people.filter((people) => people.id !== id);
    setPeople(newList);
    console.log(id);
  }

  return (
    <>
      {people.map((person) => {
        const { id, first_name, last_name, birthday, image } = person;
        return (
          <li key={id} className="person">
            <h4>
              {first_name} {last_name}
            </h4>
            <img src={image} />
            <p>{birthday}</p>
            <button className="delete" onClick={() => deletePerson(id)}>
              Remove
            </button>
          </li>
        );
      })}
    </>
  );
};

export default List;

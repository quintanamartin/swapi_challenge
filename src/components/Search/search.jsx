import React, { useState } from 'react';

export const Search = props => {
  const [firstName, setFirstName] = useState([]);
  const [secondName, setSecondName] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    const firstUrl = `https://swapi.co/api/people/?search=${firstName}`;
    const secondUrl = `https://swapi.co/api/people/?search=${secondName}`;

    props.handleSearch(firstUrl, secondUrl);
  };

  return (
    <div className="h-48 text-center items-center">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label className="mx-8 inline-block align-middle ">
            <input
              type="text"
              name="name"
              required
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            ></input>
          </label>
          <label className="mx-8 inline-block align-middle ">
            <input
              type="text"
              name="name"
              required
              value={secondName}
              onChange={e => setSecondName(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <button
            type="submit"
            value="Seach character"
            className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-5 border-4 border-yellow-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

import React, { useState } from 'react';

export const Search = props => {
  const [firstName, setFirstName] = useState([]);
  const [secondName, setSecondName] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    const firstUrl = `https://swapi.co/api/people/?search=${firstName}`;
    const secondUrl = `https://swapi.co/api/people/?search=${secondName}`;
    if (firstName.trim() === '' || secondName.trim() === '') {
      alert('Need both names');
    } else {
      props.handleSearch(firstUrl, secondUrl);
    }
  };

  return (
    <div className="h-32 text-center items-center mt-10">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label className="mx-8 inline-block align-middle ">
            <input
              type="text"
              name="name"
              placeholder="Search a character"
              required
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            ></input>
          </label>
          <label className="mx-8 inline-block align-middle ">
            <input
              type="text"
              name="name"
              placeholder="Search a character"
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
            className="bg-transparent font-semibold text-yellow-500 py-2 px-4 border  rounded border-yellow-500 mt-5"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

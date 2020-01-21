import React, { useState } from 'react';

export const Search = ({ search, saveSearch, userInput }) => {
  const [error, saveError] = useState(false);

  const { name } = search;

  const handleChange = e => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '') {
      saveError(true);
      return;
    }
    saveError(false);
    userInput(true);
  };

  return (
    <div className="h-64 text-center items-center">
      <form action="" onSubmit={handleSubmit}>
        {error ? (
          <p className="text-yellow-500 font-bold">El campo es obligatorio</p>
        ) : null}
        <div>
          <label className="inline-block align-middle ">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <button
            type="submit"
            value="Seach character"
            className="text-yellow-500 font-bold"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

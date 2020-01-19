import React, { Component } from 'react';

export const Dropdown = () => {
  return (
    <div className="h-64 text-center items-center">
      <form action="">
        <label className="inline-block align-middle ">
          <select className="mr-32">
            <option>LUKE SKYWALKER</option>
          </select>
        </label>
        <label className="inline-block align-middle ">
          <select className="mr-32  ">
            <option>LUKE SKYWALKER</option>
          </select>
        </label>
      </form>
    </div>
  );
};

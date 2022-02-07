'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Places', [
     {
      address: "123 Baker Street",
      city: "Chicago",
      state: "Illinois",
      country: "USA",
      name: "Ferris Buellers Tree",
      price: 245,
     },
     {
      address: "456 Granny Ave",
      city: "Orlando",
      state: "FL",
      country: "USA",
      name: "Palm Tree",
      price: 300,
      },
      {
      address: "904 Chateau Court",
      city: "Dallas",
      state: "TX",
      country: "USA",
      name: "Big Texas Tree",
      price: 150,
      },
      {
      address: "9870 Elizabeth Street",
      city: "Salt Lake City",
      state: "UT",
      country: "USA",
      name: "Mountain Tree",
      price: 480,
      },
    {
      address: "224 State Street",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      name: "Redwood",
      price: 800,
      },
    {
      address: "429 Bourbon Street",
      city: "New Orleans",
      state: "LA",
      country: "USA",
      name: "Martigra Tree",
      price: 1000,
      },], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Places', null, {});
  }
};

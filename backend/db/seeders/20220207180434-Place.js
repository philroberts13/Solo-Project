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
      userId: 1,
      address: "123 Baker Street",
      city: "Chicago",
      state: "Illinois",
      country: "USA",
      name: "Ferris Buellers Tree",
      price: 245,
      imageUrl: "https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image/uploads/+0Regular_Roundup/Treehouse2017/Cindercone_05.jpg"
     },
     {
      userId: 1,
      address: "456 Granny Ave",
      city: "Orlando",
      state: "FL",
      country: "USA",
      name: "Palm Tree",
      price: 300,
      imageUrl: "https://cdn.sortra.com/wp-content/uploads/2014/10/treehouse07.jpg"
      },
      {
      userId: 1,
      address: "904 Chateau Court",
      city: "Dallas",
      state: "TX",
      country: "USA",
      name: "Big Texas Tree",
      price: 150,
      imageUrl: "https://cdn.sortra.com/wp-content/uploads/2014/10/treehouse13.jpg"
      },
      {
      userId: 2,
      address: "9870 Elizabeth Street",
      city: "Salt Lake City",
      state: "UT",
      country: "USA",
      name: "Mountain Tree",
      price: 480,
      imageUrl: "https://cdn.sortra.com/wp-content/uploads/2014/10/treehouse01.jpg"
      },
    {
      userId: 2,
      address: "224 State Street",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      name: "Redwood",
      price: 800,
      imageUrl: "https://cdn.sortra.com/wp-content/uploads/2014/10/treehouse05.jpg"
      },
    {
      userId: 3,
      address: "429 Bourbon Street",
      city: "New Orleans",
      state: "LA",
      country: "USA",
      name: "Happy Tree",
      price: 1000,
      imageUrl: "https://cdn.sortra.com/wp-content/uploads/2014/10/treehouse02.jpg"
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

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users',
    [
      {
        full_name: 'John Doe',
        username: 'JohnDoe_01',
        email: 'john@test.com',
        role: 'user',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
        points: 700,
      },
      {
        full_name: 'Veronica Hooper',
        username: 'VeHoo',
        email: 'veronicahop@test.com',
        role: 'user',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
        points: 600,
      },
      {
        full_name: 'Lillian Lewis',
        username: 'admin_lewis',
        email: 'llewis@test.com',
        role: 'admin',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
      },
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
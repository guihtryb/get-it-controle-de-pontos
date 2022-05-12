module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users',
    [
      {
        full_name: 'John Doe',
        username: 'JohnDoe_01',
        email: 'john@test.com',
        role: 'user',
        password: '$2a$12$l9ido3lyiklJn1480QYEAuXBdKIPXgsljsFgy3SR9dp0kqPjBY9nK',
        points: 700,
      },
      {
        full_name: 'Veronica Hooper',
        username: 'VeHoo',
        email: 'veronicahop@test.com',
        role: 'user',
        password: '$2a$12$kRDJ507uCP0N1.I60nlahOXN0ZmLKfiWVmgP/GVDe7ZVprfyUUJtO',
        points: 600,
      },
      {
        full_name: 'Lillian Lewis',
        username: 'admin_lewis',
        email: 'llewis@test.com',
        role: 'admin',
        password: '$2a$12$.4dpe3ntOD9hqoYOQploeuXWlFZ2zNsPEI96IMVBo6AX9fiO2TI2y'
      },
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Products',
    [
      {
        title: 'Headset Pro GI',
        price: 69.77,
        price_points: 250,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80',
        selled: false,
      },
      {
        title: 'Nike Soft Ride',
        price: 189.22,
        price_points: 570,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        selled: false,
      },
      {
        title: 'Crosley Victrola',
        price: 269.77,
        price_points: 810,
        image: 'https://images.unsplash.com/photo-1594328082970-cf6a92166067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        selled: false,
      },
      {
        title: 'Marshall AMP',
        price:  320.33,
        price_points: 960,
        image: 'https://images.unsplash.com/photo-1516575869513-3f418f8902ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80',
        selled: false,
      },
      {
        title: 'Iphone Pro Max',
        price: 500.23,
        price_points: 1500,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80',
        selled: false,
      },
      {
        title: 'Quokka Coffe Bottle',
        price: 70.27,
        price_points: 210,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80',
        selled: false,
      }
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Products', null, {}),
};
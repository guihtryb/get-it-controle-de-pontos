module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('products',
    [
      {
        title: 'Headset Pro GI',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80',
        price: 69.77,
        price_points: 250,
        to_points_converter: 0.5,
        sold: false,
      },
      {
        title: 'Nike Soft Ride',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        price: 189.22,
        price_points: 570,
        to_points_converter: 0.5,
        sold: false,
      },
      {
        title: 'Crosley Victrola',
        image: 'https://images.unsplash.com/photo-1594328082970-cf6a92166067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        price: 269.77,
        price_points: 810,
        to_points_converter: 0.75,
        sold: false,
      },
      {
        title: 'Marshall AMP',
        image: 'https://images.unsplash.com/photo-1516575869513-3f418f8902ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80',
        price:  320.33,
        price_points: 960,
        to_points_converter: 0.75,
        sold: false,
      },
      {
        title: 'Iphone Pro Max',
        image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        price: 500.23,
        price_points: 1500,
        to_points_converter: 0.75,
        sold: false,
      },
      {
        title: 'Quokka Coffe Bottle',
        image: 'https://images.unsplash.com/photo-1604404896684-19adc506af81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        price: 70.27,
        price_points: 210,
        to_points_converter: 0.25,
        sold: false,
      }
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};
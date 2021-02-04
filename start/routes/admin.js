'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  /**
   * Categories resourse routes
   */
  Route.resource('categories', 'CategoryController').apiOnly()

  /**
   * Products resourse routes
   */
  Route.resource('products', 'ProductController').apiOnly()

  /**
   * Users resourse routes
   */
  Route.resource('users', 'UserController').apiOnly()

  /**
   * Coupons resourse routes
   */
  Route.resource('coupons', 'CouponController').apiOnly()

  /**
   * Orders resourse routes
   */
  Route.resource('orders', 'OrderController').apiOnly()

  /**
   * Images resourse routes
   */
  Route.resource('images', 'ImageController').apiOnly()
})
  .prefix('v1/admin')
  .namespace('Admin')

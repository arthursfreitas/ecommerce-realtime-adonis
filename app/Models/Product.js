'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  image() {
    return this.belongsTo('App/Models/Image')
  }

  /**
   * Relationship between product and images
   * Gallery images
   */
  images() {
    return this.belongsToMany('App/Models/Image')
  }

  /**
   * Relationship between products and categories
   */
  categories() {
    return this.belongsToMany('App/Models/Category')
  }

  /**
   * Relationship between products and coupons
   */

  coupons() {
    return this.belongsToMany('App/Models/Coupon')
  }
}

module.exports = Product

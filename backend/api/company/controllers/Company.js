'use strict';

/**
 * Company.js controller
 *
 * @description: A set of functions called "actions" for managing `Company`.
 */

module.exports = {

  /**
   * Retrieve company records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.company.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a company record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.company.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an company record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.company.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an company record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.company.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an company record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.company.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};

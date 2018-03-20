'use strict';

/**
 * Roadmaps.js controller
 *
 * @description: A set of functions called "actions" for managing `Roadmaps`.
 */

module.exports = {

  /**
   * Retrieve roadmaps records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.roadmaps.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a roadmaps record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.roadmaps.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an roadmaps record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.roadmaps.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an roadmaps record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.roadmaps.edit(ctx.params, ctx.request.body);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
  * Update a/an roadmaps record.
  *
  * @return {Object}
  */

  inc: async (ctx, next) => {
    const data = await strapi.services.roadmaps.inc(ctx.params, ctx.request.body);

    // Send 200 `ok`
    ctx.send(data);
  },




  /**
   * Destroy a/an roadmaps record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.roadmaps.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};


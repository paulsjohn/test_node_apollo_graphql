import { resolver as rs } from "graphql-sequelize";
import { Headquarter as HQ } from "../../models/headquarter.model";
import to from "await-to-js";

export const Mutation = {
  HeadquarterC: rs(HQ, {
    before: async (findOptions, { data }) => {
      let err, headquarter;
      [err, headquarter] = await to(HQ.create(data));
      if (err) {
        throw err;
      }
      findOptions.where = { id: headquarter.id };
      return findOptions;
    },
    after: headquarter => {
      return headquarter;
    }
  })
};

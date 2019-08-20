import { resolver as rs } from "graphql-sequelize";
import { Headquarter as Hq } from "../../models/headquarter.model";
import to from "await-to-js";

export const Mutation = {
  HeadquarterCreate: rs(Hq, {
    before: async (findOptions, { data }) => {
      let err, headquarter;
      [err, headquarter] = await to(Hq.create(data));
      if (err) {
        throw err;
      }
      findOptions.where = { id: headquarter.id };
      return findOptions;
    },
    after: headquarter => {
      return headquarter;
    }
  }),
  HeadquarterUpdate: rs(Hq, {
    before: async (findOptions, { data, where }) => {
      let err, headquarter;
      [err, headquarter] = await to(Hq.update(data,{where: where}));
      if (err) {
        throw err;
      }
      findOptions.where = { id: where.id };
      return findOptions;
    },
    after: headquarter => {
      return headquarter;
    }
  }),
};

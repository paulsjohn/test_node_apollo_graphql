import { resolver } from "graphql-sequelize";
import { Headquarter } from "../../models/headquarter.model";
import to from "await-to-js";

export const Mutation = {
  Headquarter: rs(Headquarter, {
    before: async (findOptions, { data }) => {
      let err, headquarter;
      [err, headquarter] = await to(Headquarter.create(data));
      if (err) {
        throw err;
      }
      findOptions.where = { id: headquarter.id };
      return findOptions;
    },
    after: headquarter => {
      headquarter.login = true;
      return headquarter;
    }
  })
};

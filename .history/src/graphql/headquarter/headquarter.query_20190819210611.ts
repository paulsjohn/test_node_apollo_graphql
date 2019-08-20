import { resolver } from 'graphql-sequelize';
import { Headquarter } from '../../models/headquarter.model';
import to from 'await-to-js';

export const Query = {
    Headquarter: resolver(Headquarter),
    Headquarters: resolver(Headquarter)
};

import { resolver } from 'graphql-sequelize';
import { Headquarter } from '../../models/headquarter.model';
import to from 'await-to-js';

export const Query = {
    getHeadquarter: resolver(Headquarter),
    getHeadquarters: resolver(Headquarter)
};

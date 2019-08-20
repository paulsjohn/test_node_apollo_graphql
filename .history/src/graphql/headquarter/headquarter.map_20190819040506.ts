import { resolver } from 'graphql-sequelize';
import { Headquarter } from '../../models';
import to from 'await-to-js';

export const CompanyMap = {
    users: resolver(Company.associations.users),
};
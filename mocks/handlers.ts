import { rest } from 'msw';

import randomLocationGenerator from '../utils/randomLocationGenerator';
import { randomAddressGenerator } from '../utils/randomAddressGenerator';
import { Location, Address } from '../utils/types';
import { paths } from '../statics/urls';

export const handlers = [
    rest.get(paths.SEARCH_LOCATION, (req, res, ctx) => {
      
      return res(
        ctx.status(200),
        ctx.json<Address>(randomAddressGenerator()),
      )
    }),

    rest.get(paths.SEARCH_ADDRESS, (req, res, ctx) => {
 
      return res(
        ctx.status(200),
        ctx.json<Location>(randomLocationGenerator()),
      )
    }),
  ]
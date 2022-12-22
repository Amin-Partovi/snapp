import { rest } from 'msw';
import randomLocationGenerator from '../utils/randomLocationGenerator';
import { randomAddressGenerator } from '../utils/randomAddressGenerator';

import { Location, Address } from '../utils/types';

export const handlers = [
    rest.get('/search/get-address', (req, res, ctx) => {
      
      return res(
        ctx.status(200),
        ctx.json<Address>(randomAddressGenerator()),
      )
    }),

    rest.get('/search/search-address', (req, res, ctx) => {
 
      return res(
        ctx.status(200),
        ctx.json<Location>(randomLocationGenerator()),
      )
    }),
  ]
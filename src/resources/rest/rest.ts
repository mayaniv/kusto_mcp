// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QueryAPI from './query';
import {
  DatasetCompletionFrame,
  DatasetHeaderFrame,
  DatasetTableFrame,
  Query,
  QueryExecuteParams,
  QueryExecuteResponse,
  QueryRetrieveParams,
  QueryRetrieveResponse,
} from './query';

export class Rest extends APIResource {
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
}

Rest.Query = Query;

export declare namespace Rest {
  export {
    Query as Query,
    type DatasetCompletionFrame as DatasetCompletionFrame,
    type DatasetHeaderFrame as DatasetHeaderFrame,
    type DatasetTableFrame as DatasetTableFrame,
    type QueryRetrieveResponse as QueryRetrieveResponse,
    type QueryExecuteResponse as QueryExecuteResponse,
    type QueryRetrieveParams as QueryRetrieveParams,
    type QueryExecuteParams as QueryExecuteParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Query extends APIResource {
  /**
   * Query Kusto V2
   */
  retrieve(params: QueryRetrieveParams, options?: RequestOptions): APIPromise<QueryRetrieveResponse> {
    const {
      accept,
      acceptEncoding,
      host,
      app,
      clientRequestId,
      clientVersion,
      connection,
      contentLength,
      expect,
      readonly,
      user,
      userId,
      ...query
    } = params;
    return this._client.get('/v2/rest/query', {
      query,
      ...options,
      headers: buildHeaders([
        {
          accept: accept.toString(),
          acceptEncoding: acceptEncoding.toString(),
          host: host,
          ...(app != null ? { app: app } : undefined),
          ...(clientRequestId != null ? { clientRequestId: clientRequestId } : undefined),
          ...(clientVersion != null ? { clientVersion: clientVersion } : undefined),
          ...(connection?.toString() != null ? { connection: connection?.toString() } : undefined),
          ...(contentLength?.toString() != null ? { contentLength: contentLength?.toString() } : undefined),
          ...(expect != null ? { expect: expect } : undefined),
          ...(readonly?.toString() != null ? { readonly: readonly?.toString() } : undefined),
          ...(user != null ? { user: user } : undefined),
          ...(userId != null ? { userId: userId } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Query Kusto V2
   */
  execute(params: QueryExecuteParams, options?: RequestOptions): APIPromise<QueryExecuteResponse> {
    const {
      accept,
      acceptEncoding,
      host,
      app,
      clientRequestId,
      clientVersion,
      connection,
      contentLength,
      expect,
      readonly,
      user,
      userId,
      ...body
    } = params;
    return this._client.post('/v2/rest/query', {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/json;charset=utf-8',
          accept: accept.toString(),
          acceptEncoding: acceptEncoding.toString(),
          host: host,
          ...(app != null ? { app: app } : undefined),
          ...(clientRequestId != null ? { clientRequestId: clientRequestId } : undefined),
          ...(clientVersion != null ? { clientVersion: clientVersion } : undefined),
          ...(connection?.toString() != null ? { connection: connection?.toString() } : undefined),
          ...(contentLength?.toString() != null ? { contentLength: contentLength?.toString() } : undefined),
          ...(expect != null ? { expect: expect } : undefined),
          ...(readonly?.toString() != null ? { readonly: readonly?.toString() } : undefined),
          ...(user != null ? { user: user } : undefined),
          ...(userId != null ? { userId: userId } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface DatasetCompletionFrame {
  Cancelled: boolean;

  FrameType: 'DataSetCompletion';

  HasErrors: boolean;
}

/**
 * Kusto Response V2 DataSet Header Frame
 */
export interface DatasetHeaderFrame {
  FrameType: 'DataSetHeader';

  IsProgressive: boolean;

  Version: string;
}

export interface DatasetTableFrame {
  Columns: Array<DatasetTableFrame.Column>;

  FrameType: 'DataTable';

  Rows: Array<Array<unknown>>;

  TableName: string;

  TableId?: number;

  TableKind?: string;
}

export namespace DatasetTableFrame {
  export interface Column {
    ColumnName: string;

    ColumnType?: string;

    DateType?: string;
  }
}

export type QueryRetrieveResponse = Array<DatasetHeaderFrame | DatasetTableFrame | DatasetCompletionFrame>;

export type QueryExecuteResponse = Array<DatasetHeaderFrame | DatasetTableFrame | DatasetCompletionFrame>;

export interface QueryRetrieveParams {
  /**
   * Query param: Text of the query or control command to execute
   */
  csl: string;

  /**
   * Header param: The Accept header
   */
  accept: 'application/json';

  /**
   * Header param: The Accept-Encoding header
   */
  acceptEncoding: 'gzip' | 'deflate';

  /**
   * Header param: The Host header. Set to the qualified domain name that the request
   * was sent to (for example, help.kusto.windows.net)
   */
  host: string;

  /**
   * Query param: Name of the database in scope that is the target of the query or
   * control command
   */
  db?: string;

  /**
   * Query param: Provides client request properties that modify how the request is
   * processed and its results.
   */
  properties?: string;

  /**
   * Header param: The (friendly) name of the application making the request
   */
  app?: string;

  /**
   * Header param: A unique identifier for the request
   */
  clientRequestId?: string;

  /**
   * Header param: The (friendly) version identifier for the client making the
   * request
   */
  clientVersion?: string;

  /**
   * Header param: The Connection header
   */
  connection?: 'Keep-Alive';

  /**
   * Header param: The Content-Length header
   */
  contentLength?: number;

  /**
   * Header param: The Expect header. Can be set to 100-Continue
   */
  expect?: string;

  /**
   * Header param: If specified, forces the request to run in read-only mode,
   * preventing it from making long-lasting changes
   */
  readonly?: boolean;

  /**
   * Header param: The (friendly) name of the user making the request
   */
  user?: string;

  /**
   * Header param: The (friendly) name of the user making the request
   */
  userId?: string;
}

export interface QueryExecuteParams {
  /**
   * Body param: Text of the query or control command to execute
   */
  csl: string;

  /**
   * Header param: The Accept header
   */
  accept: 'application/json';

  /**
   * Header param: The Accept-Encoding header
   */
  acceptEncoding: 'gzip' | 'deflate';

  /**
   * Header param: The Host header. Set to the qualified domain name that the request
   * was sent to (for example, help.kusto.windows.net)
   */
  host: string;

  /**
   * Body param: Name of the database in scope that is the target of the query or
   * control command
   */
  db?: string;

  /**
   * Body param: Provides client request properties that modify how the request is
   * processed and its results.
   */
  properties?: string;

  /**
   * Header param: The (friendly) name of the application making the request
   */
  app?: string;

  /**
   * Header param: A unique identifier for the request
   */
  clientRequestId?: string;

  /**
   * Header param: The (friendly) version identifier for the client making the
   * request
   */
  clientVersion?: string;

  /**
   * Header param: The Connection header
   */
  connection?: 'Keep-Alive';

  /**
   * Header param: The Content-Length header
   */
  contentLength?: number;

  /**
   * Header param: The Expect header. Can be set to 100-Continue
   */
  expect?: string;

  /**
   * Header param: If specified, forces the request to run in read-only mode,
   * preventing it from making long-lasting changes
   */
  readonly?: boolean;

  /**
   * Header param: The (friendly) name of the user making the request
   */
  user?: string;

  /**
   * Header param: The (friendly) name of the user making the request
   */
  userId?: string;
}

export declare namespace Query {
  export {
    type DatasetCompletionFrame as DatasetCompletionFrame,
    type DatasetHeaderFrame as DatasetHeaderFrame,
    type DatasetTableFrame as DatasetTableFrame,
    type QueryRetrieveResponse as QueryRetrieveResponse,
    type QueryExecuteResponse as QueryExecuteResponse,
    type QueryRetrieveParams as QueryRetrieveParams,
    type QueryExecuteParams as QueryExecuteParams,
  };
}

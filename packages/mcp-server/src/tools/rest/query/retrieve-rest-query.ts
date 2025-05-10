// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Kusto from 'kusto-dm-mcp';

export const metadata: Metadata = {
  resource: 'rest.query',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_rest_query',
  description: 'Query Kusto V2',
  inputSchema: {
    type: 'object',
    properties: {
      csl: {
        type: 'string',
        description: 'Text of the query or control command to execute',
      },
      accept: {
        type: 'string',
        enum: ['application/json'],
      },
      acceptEncoding: {
        type: 'string',
        enum: ['gzip', 'deflate'],
      },
      host: {
        type: 'string',
      },
      db: {
        type: 'string',
        description: 'Name of the database in scope that is the target of the query or control command',
      },
      properties: {
        type: 'string',
        description:
          'Provides client request properties that modify how the request is processed and its results.',
      },
      app: {
        type: 'string',
      },
      clientRequestId: {
        type: 'string',
      },
      clientVersion: {
        type: 'string',
      },
      connection: {
        type: 'string',
        enum: ['Keep-Alive'],
      },
      contentLength: {
        type: 'integer',
      },
      expect: {
        type: 'string',
      },
      readonly: {
        type: 'boolean',
      },
      user: {
        type: 'string',
      },
      userId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Kusto, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.rest.query.retrieve(body);
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Kusto from 'kusto-dm-mcp';

const client = new Kusto({
  cluster: 'My-Cluster',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource query', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.rest.query.retrieve({
      csl: 'csl',
      accept: 'application/json',
      acceptEncoding: 'gzip',
      host: 'host',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.rest.query.retrieve({
      csl: 'csl',
      accept: 'application/json',
      acceptEncoding: 'gzip',
      host: 'host',
      db: 'db',
      properties: 'properties',
      app: 'app',
      clientRequestId: 'clientRequestId',
      clientVersion: 'clientVersion',
      connection: 'Keep-Alive',
      contentLength: 0,
      expect: 'expect',
      readonly: true,
      user: 'user',
      userId: 'userId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('execute: only required params', async () => {
    const responsePromise = client.rest.query.execute({
      csl: 'csl',
      accept: 'application/json',
      acceptEncoding: 'gzip',
      host: 'host',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('execute: required and optional params', async () => {
    const response = await client.rest.query.execute({
      csl: 'csl',
      accept: 'application/json',
      acceptEncoding: 'gzip',
      host: 'host',
      db: 'db',
      properties: 'properties',
      app: 'app',
      clientRequestId: 'clientRequestId',
      clientVersion: 'clientVersion',
      connection: 'Keep-Alive',
      contentLength: 0,
      expect: 'expect',
      readonly: true,
      user: 'user',
      userId: 'userId',
    });
  });
});

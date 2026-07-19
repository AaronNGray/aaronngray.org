---
author: AaronNGray
pubDatetime: 2026-07-19T20:12:07Z
title: Node.js Express HTTP QUERY Support
postSlug: node-js-express-http-query-support
featured: true
draft: false
tags:
  - HTTP QUERY
  - Node.js
  - Express
description: Details of Node.js Express HTTP QUERY method support.
---

[RFC10008](https://datatracker.ietf.org/doc/rfc10008/) adds a new HTTP QUERY method.

[Issue #51562 - Support for 'QUERY' method](https://github.com/nodejs/node/issues/51562) introduced the new HTTP QUERY method to [Node.js Express](https://expressjs.com/) [app.query(path:String | RegExp | Array, callback:Function | Function[])](https://expressjs.com/en/5x/api/application/#appquery)

Express 5 does not automatically cache responses, regardless of whether you use the standard HTTP GET method or the newer IETF HTTP QUERY method. You must implement caching manually or via third-party middleware (like Redis)

Requires runtime: Node.js >=20.19.3 <21 || >=22.2.0

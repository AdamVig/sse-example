SSE Example
-----------

This is a minimal example of
[server-sent events](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events) between a
Node.JS server and the browser.

The server has a single route, `/sse`, which sends the message "foo" then a stream of random numbers, one per
second. The web page logs the incoming messages to the console.

## Usage
To run the application:
1. `npm ci`
2. `npm start`
3. Open <localhost:8080> in your browser.

## Add security headers to an Express app

### What are security headers

HTTP security headers are a fundamental part of website security, and protect against common client-side vulnerabilities, like Cross-Site Scripting (XSS), code injection, clickjacking, etc. 
They can also instruct the browser to prefer HTTPS over HTTP so that the connection is secure. 

### Running the application

1. Run the Express app: 
```
npm install
npm start
```

2. In the command line, use `curl` to make a request and see the headers: 

```
curl -i http://localhost:3000
```

You should see the following response:

```
curl -i http://localhost:3000
HTTP/1.1 200 OK
Content-Security-Policy: default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
X-DNS-Prefetch-Control: off
Expect-CT: max-age=0
X-Frame-Options: SAMEORIGIN
Strict-Transport-Security: max-age=320000000; includeSubDomains
X-Download-Options: noopen
X-Content-Type-Options: nosniff
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: no-referrer
X-XSS-Protection: 0
Content-Type: text/html; charset=utf-8
Content-Length: 24
ETag: W/"18-VOGu59eC12bVgoIsKg1m72OQyio"
Date: Wed, 18 Aug 2021 22:09:16 GMT
Connection: keep-alive
Keep-Alive: timeout=5

<h2> Oh hai there! </h2>
```

3. You can also open the URL (`http://localhost:3000`) in the browser and use the Developer Tools.

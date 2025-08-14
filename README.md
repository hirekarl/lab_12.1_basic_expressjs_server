# Lab 12.1: Build a Basic Express.js Server

[Karl Johnson](https://github.com/hirekarl)  
2025-RTT-30  
<time datetime="2025-08-14">2025-08-14</time>  

![Alt text for preview image.](./preview.png)

## Overview
### Viewer Instructions
1. Run the following in the terminal:

```bash
cd daily-grind-server && npm i && npm run dev
```

2. Navigate to http://localhost:3000 in the browser.

### Submission Source
Top-level application behavior can be found in [`./daily-grind-server/server.js`](./daily-grind-server/server.js).


### Reflection
1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?
> `res.send` sends an HTTP response, and can be a string, an array, and object, a `Buffer`, or a Boolean; `res.sendFile` sends a file from a specific location in the file system. With `res.send`, Express will automatically handle some headers (e.g., `Content-Type`) and convert given strings to `text/html` encoding, and arrays and objects to `application/json`. `res.sendFile` will configure the `Content-Type` header based on the extension of the file specified. `res.sendFile` is useful for serving static files, such as static HTML pages, CSS files, images, etc.; `res.send` is more useful for sending individual objects, plain text, and bits of HTML encoded as strings.

2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?
> The `path` module allows developers to provide absolute paths to resources with reference to the location of the calling module. For instance, `path.join(__dirname, "public")` joins the `public/` directory to the absolute path of the directory containing its calling module. `node` will look for paths to resources relative to the current working directory, so specifying an absolute path in the module ensures `node` is always looking in the right place, regardless of where it's called from the terminal.

3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?
> First, I'd make a `menu.html` page in the `public/` directory. Then, I'd set up a new route in `server.js` under my `/contact` route, with `app.get("/menu", (req, res) => res.sendFile(path.join(public, "menu.html")))` (`public` is already set up as a constant that refers to the directory at `path.join(__dirname, "public")`).

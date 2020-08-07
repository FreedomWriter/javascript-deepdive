# Minimize Images

- If you want transparency: use a PNG
- If you want animations: use a GIF
- If you want colorful images: use a JPG
- If you want simple icons, logos, and illustrations, use SVGs
- Reduce PNG with TinyPNG
- Reduce JPG wth JPEG-optimizer
- Try to choose simple illustrations over highly detailed photographs
- Always lower JPEG image quality (30-60%)
- Resize image based on size it will be displayed - if the images is 1000px but you're only displaying it at 500px, resize the image!
- Display different sized images for different backgrounds (use medial queries)
- Use CDNs (content delivery network) like imigx
- Remove image metadata - <https://www.verexif.com/en/> does this meta data often includes gps coordinates and other info, not just good to remove for performance, but also for privacy

[Media Query Cheat Sheet](https://gist.github.com/bartholomej/8415655)

## Vanilla

HTML

1. Load <style> in <head>
2. Load <cript> right before </body>

CSS

3. Load only what is needed
4. Above the fold leaoding (might consider internal css where there is a <style>CSS here</style>)
5. Media Attribues - can be loaded in HTML
   ex. <link rel="stylesheet" href="./style2.css" media= "only screen and (min-width:500px)">
6. Less Specificty

JS

- JS is parser blocking
- Load Scripts asynchronously only need to add the async keyword
  - add to anything that doesnt' affect the DOM ie google analytic scripts or tracking scripts
  - <script async>
- Defer script loading
  - will wait to execute script until HTML has been parsed and will execute in order of appearance
  - good for scripts that will act on the render tree or DOM but aren't imporant to loading the above the fold content
- If core functionality requires JS use async otherwise defer, critical scripts don't get deferred or ran async
- MinimzeDOM manipulation
- Avoid long running JS

[additional information about script loading with async and defer](https://stackoverflow.com/questions/10808109/script-tag-async-defer)

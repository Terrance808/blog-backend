const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001; // You can use any port


app.use(cors());

interface Post {
  title: string;
  date: string;
  content: string;
}

const recentPosts: Post[] = [
  {
    title: 'Sample blog post',
    date: 'April 1, 2020',
    content: `
      This blog post shows a few different types of content that are supported and styled with
      Material styles. Basic typography, images, and code are all supported.
      You can extend these by modifying.

      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
    `
  },
  {
    title: 'Another blog post',
    date: 'March 23, 2020',
    content: `
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
    `
  },
  {
    title: 'New feature',
    date: 'March 14, 2020',
    content: `
      This blog post shows a few different types of content that are supported and styled with
      Material styles. Basic typography, images, and code are all supported.
      You can extend these by modifying.
      This blog post shows a few different types of content that are supported and styled with
      Material styles. Basic typography, images, and code are all supported.
      You can extend these by modifying.
      This blog post shows a few different types of content that are supported and styled with
      Material styles. Basic typography, images, and code are all supported.
      You can extend these by modifying.
      This blog post shows a few different types of content that are supported and styled with
      Material styles. Basic typography, images, and code are all supported.
      You can extend these by modifying.
    `
  }
];

app.get('/front-page', (req: any, res: any) => {
  res.json(recentPosts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

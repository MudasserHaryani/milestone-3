type Post = {
    title: string;
    summary: string;
    slug: string;
    imageUrl: string;
}

type Author = {
    bio: string; // The biography of the author
    imageUrl: string; // The URL of the author's image (can be null)
    name: string; // The name of the author
  };
  
  type PostDynamic = {
    title: string; // The title of the blog post
    imageUrl: string; // The URL of the blog's featured image (can be null)
    summary: string; // A summary of the blog post
    content: any; // The main content of the blog, suitable for PortableText
    author: Author; // The author details
  };
  
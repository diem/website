import React from 'react';

function BlogRedirect(props) {
  const slug = location.pathname.slice(location.pathname.lastIndexOf('/')+1);
  console.log('Redirecting to slug: ', slug)
  // window.location = 'https://libra.org/en-US/blog/' + slug;
  return null;
}

export default BlogRedirect;

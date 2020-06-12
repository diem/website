---
author: Libra Engineering Team
title: Libra - The Path Forward
---
export const BlogRedirect = () => {
  const slug = location.pathname.slice(location.pathname.lastIndexOf('/')+1);
  window.location = 'https://libra.org/en-US/blog/' + slug;
  return null
}

<BlogRedirect />

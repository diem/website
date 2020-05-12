---
author: Libra Association
title: 'The Libra Consensus Protocol: Today and Next Steps'
---

export const BlogRedirect = () => {
  const slug = location.pathname.slice(location.pathname.lastIndexOf('/')+1);
  window.location = 'https://libra.org/en-US/blog/' + slug;
  return null
}

<BlogRedirect />

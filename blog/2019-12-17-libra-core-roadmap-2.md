---
author: Libra Engineering Team
title: Libra Core Roadmap #2
---

export const BlogRedirect = () => {
  const slug = location.pathname.slice(location.pathname.lastIndexOf('/')+1);
  console.log('Redirecting to slug: ', slug)
  window.location = 'https://libra.org/en-US/blog/' + slug;
  return null
}

<BlogRedirect />

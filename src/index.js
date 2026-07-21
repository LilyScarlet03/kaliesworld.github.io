export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // This catches the Discord bot path and sends the token text
    if (url.pathname === '/.well-known/discord') {
      return new Response('dh=86e1a0786a33c0cde85e61372bb7ea1c55665335', {
        headers: { 'content-type': 'text/plain' },
      });
    }

    // This is what shows up on your main homepage
    return new Response('Kaliesworld!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};

export default function BlogPosts({ html, state }) {
  const { store } = state
  const { posts = [], offset, limit } = store

  const cards = posts
    .slice(offset, offset + limit)
    .map((o, i) => `<blog-card key="${i + offset}">post</blog-card>`)
    .join('')

  return html`
      <section class="m-auto pt0 pb0">
        ${cards}
      </section>
    `
}

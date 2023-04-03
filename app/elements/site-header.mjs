export default function SiteHeader ({ html }) {
  return html`
    <style>
      header {
        background-color: var(--black-a10);
      }

      @media (prefers-color-scheme: dark) {
        header {
          background-color: var(--white-a10);
        }
      }
    </style>
    <header>
      <site-container class='pl0 pr0 pl4-lg pr4-lg'>
        <h1 class='text2 text4-lg font-heading font-bold tracking-1 pt4 pt6-lg pb0 pb2-lg'>
          <a href='/' class='no-underline'>
            Enhance Blog Template
          </a>
        </h1>
        <p class='font-body pb4 pb6-lg'>
          A subtitle for this blog
        </p>
      </site-container>
    </header>
  `
}

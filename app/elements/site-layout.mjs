export default function SiteLayout ({ html }) {
  return html`
    <site-header></site-header>
    <site-container class='pl0 pr0 pl4-lg pr4-lg'>
        <slot></slot>
      <site-footer></site-footer>
    </site-container>
  `
}

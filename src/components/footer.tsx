import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      <span>More Takalog</span>
      <ExtLink href="https://takalog.vercel.app/blog">
        <img
          src="https://vercel.com/button"
          height={46}
          width={132}
          alt="Takalog to Vercel button"
        />
      </ExtLink>

    </footer>
  </>
)

import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>NAOKI Nishimura</h1>
      <p>
        <ExtLink href="https://sites.google.com/view/naoki-nishimura">
          Google Site
        </ExtLink>{' '}
      </p>
    </div>
  </>
)

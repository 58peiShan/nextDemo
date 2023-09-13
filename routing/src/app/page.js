import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          routing
        </p>
      </div>

      <div className={styles.center}>
      {/* <Image
          className={styles.logo}
          src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-colocation.png&w=1920&q=75&dpl=dpl_81QsW7tkjEFFidWAn7172FL4AXNU"
          alt="img"
          width={800}
          height={500}
          priority
        /> */}
      </div>

      <div className={styles.grid}>
        <Link
          href="./character"
          className={styles.card}
        >
          <h2>
            Character <span>-&gt;</span>
          </h2>
          <p>[動態路由]</p>
        </Link>

        <a
          href="./characters"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
          Characters <span>-&gt;</span>
          </h2>
          <p>Loading... UI and Streaming</p>
        </a>

        <a
          href="/photo"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Photo <span>-&gt;</span>
          </h2>
          <p>@並行路線</p>
          <p>(..)攔截路線</p>
        </a>

        <Link
          href="/PartialRendering"
          className={styles.card}
          rel="noopener noreferrer"
          prefetch={true}
        >
          <h2>
          Partial Rendering <span>-&gt;</span>
          </h2>
          <p>
          部分渲染Partial Rendering & 
          Link
          </p>
        </Link>
        <Link
          href="/routeHandler"
          className={styles.card}
          rel="noopener noreferrer"
          prefetch={true}
        >
          <h2>
          Route handler<span>-&gt;</span>
          </h2>
          <p>
          Route handler
          </p>
        </Link>
      </div>
    </main>
  )
}

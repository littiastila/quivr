import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to Quivr, your second brain with GenerativeAI 🧠
        </p>
      </div>
      <div className={styles.center}>
        <iframe 
          src="https://github.com/StanGirard/quivr/assets/19614572/80721777-2313-468f-b75e-09379f694653" 
          width="1000" 
          height="480" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.grid}>
  <a
    href="https://github.com/StanGirard"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      GitHub <span>-&gt;</span>
    </h2>
    <p>Check out the source code on GitHub.</p>
  </a>

  <a
    href="https://twitter.com/_StanGirard"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Twitter <span>-&gt;</span>
    </h2>
    <p>Follow us on Twitter for updates.</p>
  </a>
  <a
    href="https://discord.gg/HUpRgp2HG8"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Discord <span>-&gt;</span>
    </h2>
    <p>Join the discussion on Discord</p>
  </a>


</div>
    </main>
  )
}
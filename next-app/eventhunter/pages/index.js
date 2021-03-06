import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getWhyNextReasons } from '../lib/api';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to EventHunter!
        </h1>

        <p className={styles.description}>
          Get started by viewing some of our awesome events below!
        </p>

        <div className={styles.grid}>
        {reasons
            .slice(0, reasons.length)
            .map(({ title, description, href }) => (
              <a
                className="border border-grey-200 rounded p-4 hover:shadow-lg hover:border-transparent"
                key={title}
                href={href}
                target="_blank"
              >
                <h3 className="font-bold mb-2">{title}</h3>
                
              </a>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        Built by Charles Calzia
      </footer>
    </div>
  )
}

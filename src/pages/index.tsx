import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Calling All Musicians</title>
        <meta name="description" content="An open call for musicians" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Calling all Musicians</h1>
        <div className={styles.description}>
          <p>
          Join the most innovative (and awesome!) <b>indie country disco neo-psychedelic pop rock band</b> forming in San Diego.  All musicians and vocalists are welcome to apply to join.
          </p>
          <p>
          We will start by playing some covers.  Starting with the ones in bold:
          </p>
        </div>
        <div className={styles.setlist}>
          Setlist:
          {`Broken Bells - The High Road
          Wilco - You And I
          Wilco - Heavy Metal Drummer
          Neutral Milk Hotel - In The Aeroplane Over The Sea
          Mac Demarco - No Other Heart
          Mac Demarco - Another One
          Mac Demarco - Cookin up something good
          The Eagles - I Can’t Tell You Why
          <b>Alabama - Take Me Down [<a href="https://tabs.ultimate-guitar.com/tab/alabama/take-me-down-tonight-chords-1014042">chords</a> | <a href=""><a href="https://www.youtube.com/watch?v=VJoZT6Skimc">studio</a>]</b>
          Blake Shelton - Some Beach
          <b>Tame Impala - Solitude is Bliss [<a href="https://tabs.ultimate-guitar.com/tab/tame-impala/solitude-is-bliss-chords-1811164">chords</a> | <a href=""><a href="https://www.youtube.com/watch?v=1MmY7GJIsLc">studio</a>]</b>
          George McCrae - Rock Ya Baby
          Toby Keith - How Do You Like Me Now
          Toby Keith - As Good As I Once Was
          Josh Turner - Just To Be Your Man
          Willie Nelson - On The Road Again
          Bee Gees - How Deep Is Your Love
          Bee Gees - Night Fever
          The Beatles - I’m Only Sleeping
          The Beatles - Lucy In The Sky With Diamonds
          <b>MGMT - Electric Feel [<a href="https://tabs.ultimate-guitar.com/tab/mgmt/electric-feel-chords-838341">chords</a> | <a href=""><a href="https://www.youtube.com/watch?v=r78xfXZb_WU">studio</a>]</b>
          <b>Todd Rundgren - I Saw The Light [<a href="https://tabs.ultimate-guitar.com/tab/todd-rundgren/i-saw-the-light-chords-538783">chords</a> | <a href=""><a href="https://www.youtube.com/watch?v=PDpZpj2A3F4">studio</a>]</b>
          Bill Withers - Lovely Day
          Beach House - Walk In The Park
          Johnny Cash - The Night Hank Williams Came To Town
          Dierks Bentley - Somewhere on a Beach
          Otis Redding - Sitting on the Dock of the Bay
          Dr. Dog - Shadow People
          Gilbert O'Sullivan - Alone Again Naturally
          Velvet Underground - I'm Waiting For The Man
          Velvet Underground - Sunday Morning`.split('\n').map(line => line.trim()).map(line => <li key={line} dangerouslySetInnerHTML={{ __html: line }}/>)}
        </div>
        

      </main>
    </>
  )
}

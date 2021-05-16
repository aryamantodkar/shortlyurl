import React , {useState,useEffect} from 'react';
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [url,setUrl] = useState('');
  const [loading,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);
  const [shorturl,setShorturl] = useState('');
  const [error,setError] = useState(false);

  const inputHandler = (e) =>{
    setUrl(e.target.value);
  }
  const clickHandler = () =>{
      setLoading(true);
      axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then(res =>{
          setLoading(false);
          setSuccess(true);
          setShorturl(res.data.result.short_link);
          navigator.clipboard.writeText(res.data.result.short_link);
        })
        .catch(err => {
          alert('Please enter a valid URL');
          setError(true);
        })
  }
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Ubuntu&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container1}>
          <div className={styles.header}>
              ShortlyURL
          </div>
          <div className={styles.upper}>
            <div className={styles.left}>
              <div className={styles.tagline}>
                  Short links, big results
              </div>
              <div className={styles.caption}>
                  An URL shortener built with powerful tools to help you grow and protect your brand.
              </div>
            </div>
            <div className={styles.right}>
              <img src='/images/illustration-working.svg' className={styles.image}/>
            </div>
          </div>
      </div>
      <div className={styles.container2}>
          <div className={styles.title}>
              Simple and fast URL shortener!
          </div>
          <div className={styles.url}>
              <input placeholder='Paste long url and shorten it' className={styles.input} type='text' onChange={inputHandler} value={url} id='myInput'/>
              <button className={styles.btn} onClick={clickHandler}>Shorten</button>
          </div>
          {
            loading
            ?
            <div className={styles.loader}></div>
            : 
            success 
            && 
            <div className={styles.copyurl}>
              <span className={styles.urltext}>{shorturl}</span>
              <span className={styles.copy}>Copied to Clipboard ✔</span> 
            </div>
          }
      </div>
    </div>
  )
}

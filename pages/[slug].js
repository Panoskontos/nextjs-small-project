import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/main-layout'
import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked'

export default function Home() {
  return (
  <Main>

<>
 
    <header id="header">
      <div className="inner">
        {/* Logo */}
        <a href="index.html" className="logo">
          <span className="symbol">
            <img src="images/logo.svg" alt="" />
          </span>
          <span className="title">Phantom</span>
        </a>
        {/* Nav */}
        <nav>
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    {/* Menu */}
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="generic.html">Ipsum veroeros</a>
        </li>
        <li>
          <a href="generic.html">Tempus etiam</a>
        </li>
        <li>
          <a href="generic.html">Consequat dolor</a>
        </li>
        <li>
          <a href="elements.html">Elements</a>
        </li>
      </ul>
    </nav>
    {/* Main */}
    <div id="main">
      <div className="inner">
        <h1>Generic Page</h1>
        <span className="image main">
          <img src="images/pic13.jpg" alt="" />
        </span>
        <p>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit
          amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.
          Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna
          ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien
          risus, commodo eget turpis at, elementum convallis elit. Pellentesque
          enim turpis, hendrerit tristique.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
          rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
          porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc
          ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit
          sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris,
          fringilla in aliquam at, euismod in lectus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. In non lorem sit amet elit placerat maximus. Pellentesque
          aliquam maximus risus, vel venenatis mauris vehicula hendrerit.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent
          rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo
          mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget
          turpis at, elementum convallis elit. Pellentesque enim turpis,
          hendrerit tristique lorem ipsum dolor.
        </p>
      </div>
    </div>
    
 
</>



    </Main>
    

  
  )
}


export const getStaticPaths = async () =>{
  const files = fs.readdirSync("posts")
  console.log("files", files)
  const paths = files.map(filename => ({
    params:{
      slug: filename.replace('.md','')
    }
  }))
  console.log('paths ', paths)
  return {
    paths,
    fallback:false
  }
}

export const getStaticProps = async ({params: {slug}}) =>{

  const content = fs.readFileSync(path.join('posts',`${slug}.md`)).toString()
  console.log(content)
  return {
    props: {
      slug, content
    }
  }
}
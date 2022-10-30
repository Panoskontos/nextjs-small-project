import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/main-layout'
import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {marked} from 'marked'

export default function Post({postData, content}) {
  return (
  <Main>

<>
 
    <header id="header">
      <div className="inner">
        {/* Logo */}
        <a href="" className="logo">
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
        <h1>{postData.title}</h1>
        <span className="image main">
          <img src={"images/"+postData.image} alt="" />
        </span>
      
      <div dangerouslySetInnerHTML={{ __html: content}}></div>
      
       
      


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

  const post = fs.readFileSync(path.join('posts',`${slug}.md`)).toString()

  const postData = matter(post)
  const content = marked(postData.content)
  return {
    props: {
      slug, content, postData: postData.data
    }
  }
}
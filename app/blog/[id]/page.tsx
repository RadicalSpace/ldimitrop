import { Libre_Caslon_Text } from "next/font/google"
import ReadingBar from "./bar"
import { compileMDX } from "next-mdx-remote/rsc"
import path from "path"
import fs from 'fs'
import remarkParse from 'remark-parse'
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import remarkRehype from "remark-rehype"
import rehypeStringify from 'rehype-stringify'
import moment from "moment"
import Quiz from "../(components)/quiz"
import ImgCap from "../(components)/imgcap"
import { getSortedArticles } from "@/lib/articles"

const font = Libre_Caslon_Text({
    subsets:["latin"],
    weight:["400","700"]
})


export async function generateStaticParams() {
    const articles = getSortedArticles()
    console.log(articles)
    return articles.map((article) => ({
        id: article.id,
      }))
  }
   

const Article = async ({params}:{params:Promise<{id:string}>}) => {
    const ArticlesDirectory = path.join(process.cwd(),"articles")
    const {id} = await params
    const fullPath = path.join(ArticlesDirectory, `${id}.mdx`)
    const fileContents = fs.readFileSync(fullPath,"utf-8")
    const article = await compileMDX<{
        title:string
        subtitle:string
        author:string
        date:string

    }>({
        source:fileContents,
        options:{
            mdxOptions:{
                remarkPlugins:[remarkMath,remarkParse,remarkRehype],
                rehypePlugins:[rehypeKatex,rehypeStringify]
            },
            parseFrontmatter:true
        },
        components: {
            Quiz,
            ImgCap
        }
    })

    return (
        <section>
            <ReadingBar></ReadingBar>
            <div className={`fixed w-[5%] h-full bg-gradient-to-r from-[rgb(220,220,220)] opacity-25`}></div>
            <div className="fixed w-[5%] h-full bg-gradient-to-l left-[95%] from-[rgb(220,220,220)] opacity-25"></div>
            <div>
                <div className="w-2/3 mx-auto pt-24 text-center">
                    <div className={`text-6xl font-bold leading-[1.5em] ${font.className}`}>{article.frontmatter.title}</div>
                    <div className={`text-xl mt-4 ${font.className}`}>{article.frontmatter.subtitle}</div>
                    <div className="mt-4">
                        <div className="inline-block">{article.frontmatter.author}</div>
                        <div className="inline-block mx-2">·</div>
                        <div className="inline-block">{moment(article.frontmatter.date,"MM-DD-YYYY").format("MMMM Do YYYY")}</div>
                    </div>
                </div>
                <div className={`w-1/2 mx-auto text-justify mt-10 leading-[2em] ${font.className}`}>
                    <article className="article">{article.content}</article>
                </div>
            </div>
        </section>
    )
}

export default Article
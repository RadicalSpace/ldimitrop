import fs from "fs"
import moment from "moment"
import path from "path"
import matter from "gray-matter"
//
export type ArticleItem = {
    id:string
    subtitle:string 
    author:string
    title:string
    category:string
    date:string
    image:string
    source:string
}

const ArticlesDirectory = path.join(process.cwd(),"articles")

export const getSortedArticles = (): ArticleItem[] => {
    const filenames = fs.readdirSync(ArticlesDirectory)
    const allArticlesData = filenames.map((filename)=>{
        const id = filename.replace(/\.mdx$/,"")
        const fullPath = path.join(ArticlesDirectory,filename)
        const fileContents = fs.readFileSync(fullPath,"utf-8")
        const matterResult = matter(fileContents)

        return {
            id,
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            author: matterResult.data.author,
            category: matterResult.data.category,
            date: matterResult.data.date,
            image: matterResult.data.image,
            source: matterResult.data.source
        }
    })
    return allArticlesData.sort((a,b)=>{
        const format = "MM-DD-YYYY"
        const dateOne = moment(a.date,format)
        const dateTwo = moment(b.date,format)
        if(dateOne.isBefore(dateTwo)){
            return -1
        } else if(dateOne.isAfter(dateTwo)){
            return 1
        } else {
            return 0
        }
    })
}

export const getCategorizedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticles()
    const categorizedArticles: Record<string, ArticleItem[]> = {}
    sortedArticles.forEach((article) => {
        if(!categorizedArticles[article.category]){
            categorizedArticles[article.category] = []
        }
        categorizedArticles[article.category].push(article)
    })
    return categorizedArticles
}

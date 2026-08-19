import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import { insightArticles } from "@/lib/insightContent";
const article = insightArticles["from-visible-to-recognised"];
export const metadata: Metadata = { title: article.title, description: article.standfirst };
export default function Page() { return <ArticlePage article={article} />; }

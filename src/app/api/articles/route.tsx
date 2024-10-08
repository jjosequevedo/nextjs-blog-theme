'use server';

import { IArticle } from "@/app/interfaces";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await axios.get(process.env.API_DOMAIN?.concat(process.env.API_ARTICLES || "") || "");
    const data = result.data.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const articles: Array<IArticle> = data.map(async (article: any) => {

      const imageResult = await axios.get(article.relationships.field_image.links.related.href);
      const author = await axios.get(article.relationships.uid.links.related.href);
      const tags = await axios.get(article.relationships.field_tags.links.related.href);

      return {
        full_desc: article.attributes.body.value,
        summary: article.attributes.body.summary,
        changed: article.attributes.changed,
        created: article.attributes.created,
        slug: article.attributes.path.alias,
        title: article.attributes.title,
        author: author.data.data.attributes.display_name,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tags: tags.data.data.map((t: any) => t.attributes.name),
        image: {
          alt: article.relationships.field_image.data.meta.alt,
          url: process.env.API_DOMAIN + imageResult.data.data.attributes.uri.url,
        },
      };
    });

    return NextResponse.json({ articles: await Promise.all(articles), success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal server error', success: false }, { status: 500 });
  }
}
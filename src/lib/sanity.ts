import { sanityClient } from 'sanity:client';
import { defineQuery } from 'groq';

const ARTICLES_QUERY = defineQuery(`
	*[_type == "article" && defined(slug.current)]
	| order(publishedAt desc) {
		_id,
		title,
		excerpt,
		publishedAt,
		"slug": slug.current
	}
`);

export async function getArticles() {
	try {
		return await sanityClient.fetch(ARTICLES_QUERY);
	} catch (error) {
		console.warn('Sanity is not ready yet:', error);
		return [];
	}
}

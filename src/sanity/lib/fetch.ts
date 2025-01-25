import { createClient } from "next-sanity";

const client = createClient({
    projectId: 'cl7x1dq0',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-10',
  });


  type SanityParams = {
    id?: string;
    slug?: string;
    [key: string]: any; // If you have other dynamic fields, you can use this
  };
  
  export async function sanityFetch({ query, params = {} }: { query: string; params?: SanityParams }) {
    return await client.fetch(query, params);
  }
  
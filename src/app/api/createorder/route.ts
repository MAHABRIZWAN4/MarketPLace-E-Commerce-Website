// import { createClient } from '@sanity/client';
// import { NextApiRequest, NextApiResponse } from 'next';

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   useCdn: false,
//   apiVersion: '2023-01-01',
//   token: process.env.SANITY_API_TOKEN, // Server-side token
// });

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     try {
//       const order = await client.create(req.body);
//       res.status(200).json({ success: true, order });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to create order" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }





import { createClient } from '@sanity/client';
import { NextResponse } from 'next/server';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const order = await client.create(body);
    return NextResponse.json({ success: true, order });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}

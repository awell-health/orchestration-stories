import type { NextApiRequest, NextApiResponse } from 'next/types'

const SLACK_ENDPOINT = process.env.COMING_SOON_SLACK_WEBHOOK_URL || ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const email = req.body?.email || ''
    const storyPath = req.body?.storyPath || ''

    await fetch(SLACK_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        storyUrl: `${req.headers.origin}${storyPath}`,
      }),
      cache: 'default',
    })
      .then((response) => {
        res.status(200).send(response)
      })
      .catch((err) => {
        res.status(err.statusCode || 500).json(err)
      })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

import type { ToolFn } from '../../types'
import { z } from 'zod'
import { queryMovies } from '../rag/query'

export const movieSearchToolDefintion = {
  name: 'movieSearch',
  parameters: z.object({
    query: z.string().describe('query used to vector search on movies'),
  }),
  description:
    'use this tool to find movies or answer questions about movies and their metadata like score, rating, costs, director, actors and more',
}

type Args = z.infer<(typeof movieSearchToolDefintion)['parameters']>

export const movieSearch: ToolFn<Args> = async ({ userMessage, toolArgs }) => {
  let results
  try {
    results = await queryMovies({ query: toolArgs.query })
  } catch (error) {
    console.error(error)
    return `Error: Could not query the db to get movies`
  }

  const formattedResults = results.map(({ metadata, data }) => {
    return { ...metadata, description: data }
  })

  return JSON.stringify(formattedResults, null, 2)
}

import { generateImageToolDefinition } from './generateImage'
import { redditToolDefinition } from './reddit'
import { dadJokeToolDefinition } from './dadJoke'
import { movieSearchToolDefintion } from './movieSearch'

export const tools = [
  generateImageToolDefinition,
  redditToolDefinition,
  dadJokeToolDefinition,
  movieSearchToolDefintion,
]

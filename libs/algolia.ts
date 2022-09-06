import removeMd from 'remove-markdown'
import algoliasearch from 'algoliasearch'
import { getAllContents } from './getAllContents'
import { Blog } from '../types/blog'

export const generateIndex = async (): Promise<void> => {
  const applicationId = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID ?? ''
  const adminApiKey = process.env.ALGOLIA_ADMIN_API_KEY ?? ''
  const posts = await getAllContents()

  const objects = posts.map((blog: Blog) => {
    return {
      objectID: blog.id,
      url: `/blog/${blog.id}`,
      title: blog.title,
      content: removeMd(blog.body),
    }
  })

  const client = algoliasearch(applicationId, adminApiKey)
  const index = client.initIndex('koneru')
  process.env.NODE_ENV === 'production' &&
    (await index.saveObjects(objects, { autoGenerateObjectIDIfNotExist: true }))
}
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useAllMdxWpPosts } from '../../Hooks'
import { Posts } from './Posts'

export const MixPostsContainer = props => {
  const allMdxWpPosts = useAllMdxWpPosts()

  return <Posts allMdxWpPosts={allMdxWpPosts} {...props}></Posts>
}

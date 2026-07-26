const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'How to be a mastermind Post #1',
    author: 'Rick Sanchez',
    url: 'fake-blog.com',
    likes: 5,
  },
  {
    title: 'My life is pointless',
    author: 'Morty',
    url: 'morty.com',
    likes: 0,
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb
}

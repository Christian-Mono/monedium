export type Image = {
  url: string
}
export type Author = {
  bio: string
  name: string
  profilePicture: Image
}
export type Tag = {
  tagName: string
}
export type Article = {
  title: string
  id: string
  slug: string
  author: Author
  creationTime: string
  content: string
  readingTime: number
  thumbnail: string
  tag: Tag
}

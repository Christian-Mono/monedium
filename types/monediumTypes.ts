export type Image = {
  url: string | null | undefined
}
export type Author = {
  bio: string
  name: string
  profilePicture: Image
  positionRole: string
  followers: number
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
  thumbnail: {
    url: string
  }
  tag: Tag
}

export type Sys = {
  id: string
}

export type ArticleCollection = {
  total: number
}

export type LinkedFrom = {
  articleCollection?: ArticleCollection | null
}

export type TagArrayItem = {
  tagName?: string | null
  sys: Sys
  linkedFrom?: LinkedFrom | null
}
export type TagItem = {
  tagName?: string | null
  sys: Sys
  linkedFrom?: LinkedFrom | null
} | null

export type TagArray = TagItem[]

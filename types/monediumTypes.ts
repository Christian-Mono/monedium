export type Image = {
  url: string | null | undefined
}
export type Author = {
  bio: string
  name: string
  profilePicture: Image
  positionRole: string
  followers: number
  sys: Sys
}
export type Tag = {
  tagName: string
  sys: Sys
}
export type Article = {
  title?: string | null | undefined
  slug: string
  author: Author | null | undefined
  creationTime?: string | null | undefined
  content?: string | null | undefined
  readingTime?: number | null | undefined
  thumbnail?: Image | null | undefined
  tag?: Tag | null | undefined
  claps: number
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

  linkedFrom?: LinkedFrom | null
}
export type TagItem = {
  tagName?: string | null
  sys: Sys
  linkedFrom?: LinkedFrom | null
} | null

export type TagArray = TagItem[] | null

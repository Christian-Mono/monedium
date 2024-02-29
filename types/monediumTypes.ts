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
export type Tag =
  | {
      tagName: string
      sys: Sys
    }
  | null
  | undefined
export type Article = {
  title?: string | null
  slug?: string | null
  author?: Author | null
  creationTime?: string | null
  content?: string | null
  readingTime?: number | null
  thumbnail?: Image | null
  tag?: Tag | null
  claps?: number | null
  sys?: Sys | null
}

export type SinglePost = {
  title: string
  slug: string
  author: {
    bio: string
    name: string
    profilePicture: { url: string }
    positionRole: string
    followers: number
  }
  creationTime: string
  content: string
  readingTime: number
  thumbnail: Image
  tag: string
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

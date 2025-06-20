export interface Project {
  id: number
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  image: string
  date: string
  tags: string[]
  tools?: string[]
  link?: string
}

type TypeLibPrograms = {
  title: string | null
  shortDescription: string | null
  slug: string | null
  study_field: {
    slug: string | null
    type: string | null
    label: string | null
  } | null
  category: {
    slug: string | null
    type: string | null
    label: string | null
  } | null
  timenprice:
    | {
        studyMonthsDuration: string | null
      }[]
    | null
}[]

export default TypeLibPrograms

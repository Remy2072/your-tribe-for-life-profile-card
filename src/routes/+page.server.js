import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd.directus.app/items/person/?filter=%7B%22id%22:44%7D'

  const persons = await fetchJson(url)

  return {
    persons: persons.data
  }
}
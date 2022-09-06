import {
    Wrap,

  } from './styles'
  import algoliasearch from 'algoliasearch/lite'
  import { MultipleQueriesQuery } from '@algolia/client-search'
  import {
    InstantSearch,
    Configure,
    connectSearchBox,
    connectHits,
  } from 'react-instantsearch-dom'
  import { Props } from './types'
  
  export const Search = ({ className }: Props) => {
    const algoliaClient = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '',
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
    )
    const indexName = 'mismith'
  
    const empty = {
      hits: [],
      nbHits: 0,
      nbPages: 0,
      page: 0,
      processingTimeMS: 0,
    }
  
    const searchClient = {
      ...algoliaClient,
      search(requests: MultipleQueriesQuery[]) {
        if (requests.every(({ params }) => !params?.query)) {
          return Promise.resolve(empty)
        }
        return algoliaClient.search(requests)
      },
    }
  
    return (
      <Wrap className={className}>
        <InstantSearch indexName={indexName} searchClient={searchClient}>
          <CustomSearchBox />
          <CustomHits />
        </InstantSearch>
      </Wrap>
    )
  }
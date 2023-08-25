import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_RESULTS } from '../utils/constants';

const SearchResults = () => {

  const [searchParams] = useSearchParams();


  const fetchResults = async(search_query)=>{
    const data = await fetch(`${SEARCH_RESULTS}&q=${search_query}`);
    const json = await data.json();

    console.log(json);
  }

  useEffect(()=>{

    console.log("called");

    const search_query = searchParams.get("search_query");

    if(search_query){
        fetchResults(search_query);
    }
  },[searchParams])

  return (
    <div>SearchResults</div>
  )
}

export default SearchResults
import Results from "@/components/Results";
import Image from "next/image";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {

  const genre = searchParams.genre || 'fetchTrending';
  console.log(genre)
  const res = await fetch(`https://api.themoviedb.org/3${
    
  genre === 'fetchTopRated' ?
      '/movie/top_rated' :
      '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`,{
        next: {revalidate:10               }
      });

  
  const data = await res.json();
  if (!res.ok) {

    throw new Error('Failed to fetch data')
    console.log('error')

  }
  const results = data.results
  function prin(data){
    for(let i =0; i < data.length;i++)
    console.log( i , ' ',JSON.stringify(data[i].original_title))
  }
  console.log(results);
  // prin(results)

  return (
    <div>
      <Results results={results} />
    </div>
  );
}

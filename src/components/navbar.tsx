import { client } from "@/sanity/lib/client";
import Link from "next/link";

async function getData(){
  const fetchdata = await client.fetch(`*[_type == "navbar"]{
  "imageUrl":image.asset->url,
   name,
    firstlink,
    secondLink,
    thirdlink,
    fourthlink,
    fivethlink
}`)
   
   return fetchdata;
}

export default async function Navbar (){
  const data = await getData()
  return(
        <div className="bg-gray-800 text-gray-300 z-50 sticky top-0">
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0">
      <img className="w-10 h-10 text-white  rounded-full" src={data[0].imageUrl} alt={"logo.webj"}  />
      <span className="ml-3 text-xl">{data[0].name}</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 text-gray-300">{data[0].firstlink}</Link>
      <Link href={'#About'} className="mr-5 text-gray-300"> {data[0].secondLink} </Link>
      <Link href={"#Contact"} className="mr-5 text-gray-300"> {data[0].thirdlink} </Link>
      <Link href={"#Projects"} className="mr-5 text-gray-300"> {data[0].fourthlink} </Link>
      <Link href={'#Skills'} className="mr-5 text-gray-300"> {data[0].fivethlink} </Link>
    </nav>
    <Link href={"#Projects"} > <button className="inline-flex hover:cursor-pointer items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Projects
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button></Link>
  </div>
</header>

        </div>
    )
}
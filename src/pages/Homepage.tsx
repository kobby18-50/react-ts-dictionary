import axios from "axios";
// flowbite
import { Button, Spinner, TextInput } from "flowbite-react";
// states
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils";
import { Link } from "react-router-dom"
// models
import { MEANING } from "../models";
// react-toastify
// import { ToastContainer, toast } from 'react-toastify';



const Homepage = () => {

    const [search, setSearch] = useState('car')
    const [loading, setLoading] = useState(false)
    const [meaning, setMeaning] = useState([] as MEANING)

   

    const searchWord = async () => {
        await axios.get(`${BASE_URL}/${search}`)
            .then(response => {
                setMeaning(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error.response.data.message)
                alert(error.response.data.message)

                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
        searchWord()
        setLoading(false)
    }, [])

    const handleSearch = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault()

        setLoading(true)

        await searchWord()

        setLoading(false)

    }

   


    return (
        <section>

            <form onSubmit={handleSearch} className="flex my-5 sm:mx-20 mx-5 sm:gap-5 gap-2 items-center">
                <TextInput type="search" className="w-full" value={search} onChange={event => setSearch(event.target.value)} required />
                <div className="">


                    {loading ? <Button type="submit" disabled className="">Search</Button> : <Button type="submit" className="">Search</Button>}
                </div>
            </form>


            {loading ? <Spinner className="text-center flex items-center" size={'xl'} /> : <section className="mx-10">
                {
                    meaning.map((mean, index) => {
                        return (
                            <div key={index} className="my-20 flex flex-col gap-5">

                                {/* word and phonetic */}

                                <p className="text-2xl">{mean.word}</p>

                                <p className="text-teal-900 my-5">{mean.phonetic}</p>
                                {/* end of word and phonetic */}

                                {/* audio */}
                                <p className="text-lg">Audio</p>
                                <div className="flex flex-wrap gap-7">
                                    {
                                        mean.phonetics.map((audio, index) =>
                                        (
                                            <div key={index}>
                                                <audio src={audio.audio} controls></audio>
                                            </div>
                                        )
                                        )
                                    }
                                </div>
                                {/* end of audio */}

                                <div>
                                    {
                                        mean.meanings.map((meaning, index) => {
                                            return (


                                                <div key={index}>
                                                    <p className="text-lg capitalize">{meaning.partOfSpeech}</p>
                                                    <hr />

                                                    {/* definition */}
                                                    <p className="text-teal-900 font-bold py-5">Meaning</p>
                                                    {
                                                        meaning.definitions.map((def, index) => {
                                                            return (

                                                                // definitions start
                                                                <div key={index}>
                                                                    <span className="border-l-4 mr-5 border-teal-900">
                                                                        <span className="ml-4">{def.definition}</span>
                                                                    </span>

                                                                    {/* definitions end */}

                                                                    {/* examples */}

                                                                    {def.example && <div className="py-5">
                                                                        <p className="italic">Example</p>
                                                                        <p>{def.example}</p>
                                                                    </div>}

                                                                    {/* example end */}


                                                                </div>





                                                            )


                                                        })



                                                    }


                                                    {/* antonyms */}
                                                    {meaning.antonyms ? <section className="py-8">
                                                        <p>Antonyms</p>

                                                        <div className="flex flex-wrap gap-2 sm:gap-5">
                                                        {
                                                            meaning.antonyms.map((antonym) => (
                                                                <p className="text-teal-900 font-semibold">{antonym}</p>

                                                            ))
                                                        }
                                                        </div>
                                                    </section> : <p>No antonyms</p>}

                                                    {/* Synonyms */}
                                                    {meaning.synonyms ? <section className="py-8">
                                                        <p>Synonyms</p>

                                                        <div className="flex flex-wrap gap-2 sm:gap-5">
                                                        {
                                                            meaning.synonyms.map((synonym) => (
                                                                <p className="text-teal-900 font-semibold">{synonym}</p>

                                                            ))
                                                        }
                                                        </div>
                                                    </section> : <p>No Synonyms</p>}



                                                    {/* end of definition */}
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <p>Sources</p>

                                <div className="flex gap-5">
                                    {mean.sourceUrls.map((url, index) => (
                                        <Link key={index} to={url}>{url}</Link>
                                    ))}
                                </div>

                            </div>

                        )
                    })





                }
            </section>}



        </section>
    );
}

export default Homepage;
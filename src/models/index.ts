type PHONETICS = {
    text: string,
    audio: string,
    sourceUrl: string
}[]

type MEANINGS = {
    partOfSpeech: string,
    definitions: {
        definition: string,
        synonyms: string[] | null,
        antonyms: string[] ,
        example: string | null
    }[],
    synonyms: string[] | null,
    antonyms: string[] | null,


}[]

export type MEANING = {
    word: string,
    phonetic: string,
    phonetics: PHONETICS,
    meanings: MEANINGS,

    sourceUrls: string[]

}[]
import englishDictionary from './assets/languages/en.json' assert { type: "json" };
import spanishDictionary from './assets/languages/es.json' assert { type: "json" };

export function useTranslation({ key = "", language = "" }) {

    const firstLevel = key.substring(0, key.indexOf("."))
    const secondLevel = key.substring(key.indexOf(".") + 1, key.length)

    if (language === "en-US") {
        return englishDictionary[firstLevel][secondLevel]
    }

    if (language === "es") {
        return spanishDictionary[firstLevel][secondLevel]
    }
}

export function putTextOnUI({ element = null, text = "" }) {
    console.log({ element, text })
}
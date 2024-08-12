import config from "@/config/config";

export type SearchType = 'All' | 'Github' | 'Youtube' | 'Medium' | 'Tistory' | 'Velog';

export const searchTypes: SearchType[] = [
    'All',
    'Github',
    'Youtube',
    'Medium',
    'Tistory',
    "Velog"
]

export const searchEngineIds: { [key in SearchType]: string | undefined } = {
    'All': config.searchEngineId.all,
    'Github': config.searchEngineId.github,
    'Youtube': config.searchEngineId.youtube,
    'Medium': 'Medium',
    'Tistory': 'Thistory',
    'Velog': 'Velog',
}
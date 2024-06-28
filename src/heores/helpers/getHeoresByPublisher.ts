import { heroes } from "../data/HeroesData";


export const getHeoresByPublisher = ( publisher: string ) => {

    const validPubliushers = ['DC Comics', 'Marvel Comics'];

    if( !validPubliushers.includes( publisher ) ) {
        throw new Error(`${ publisher } is not a valid publisher!`)
    }

    return heroes.filter( hero => hero.publisher === publisher )

}


import { createContext } from 'react';

export const FavoritesContext = createContext({
    ids : [],
    addFavorite : (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvier({children}){

    

    return <FavoritesContext>{children}</FavoritesContext>
}

export default FavoritesContextProvier;


import { configureStore } from '@reduxjs/toolkit'
import favoritesReudcer from './favorites'

export const sotre = configureStore({
    reducer : {
        favoriteMeals : favoritesReudcer
    }
});


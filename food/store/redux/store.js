import { configureStore } from '@reduxjs/toolkit'
import favoritesReudcer from './favorites'

export const store = configureStore({
    reducer : {
        favoriteMeals : favoritesReudcer
    }
});


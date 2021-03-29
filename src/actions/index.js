import TYPES from '../types'
export const selectSong = song => {
    return {
        type: TYPES.SELECTED_SONG,
        payload: song
    }
};
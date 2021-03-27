import TYPES from '../types'
export const selectSong = song => {
    return {
        type: TYPES.SONG_SELECTED,
        payload: song
    }
};
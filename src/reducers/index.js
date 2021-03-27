import TYPES from '../actions';

const songsReducer = () => {
    return [
        {title: 'Second to None', duration: '5:11'},
        {title: 'Symphony of Destruction feat. Vinnie Moore & George Bellas', duration: '6:43'},
        {title: 'When Eden Burns', duration: '5:15'},
        {title: 'Black Sabbath', duration: '6:17'}
    ]
};

const selectedSongReducer = (selectedSong, action) => {
    if(action.type === TYPES.SELECTED_SONG)
    {
        return action.payload;
    }

    return selectedSong;
};
import { GOOGLE_API_KEY } from "./key";

export const USER_ICON = "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// https://cors-anywhere.herokuapp.com/

export const LIKE_ICON = "https://img.icons8.com/?size=100&id=24816&format=png&color=000000";
export const DISLIKE_ICON = 'https://static.vecteezy.com/system/resources/thumbnails/021/013/463/small_2x/dislike-icon-on-transparent-background-free-png.png';
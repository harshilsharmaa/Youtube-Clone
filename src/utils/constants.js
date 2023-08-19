const GOOGLE_API_KEY =  "AIzaSyArm3lXbB8TrDDmS2uKOTRfF3SturIZxSI";


export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_VIDEO = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const COMMENT_THREAD = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${GOOGLE_API_KEY}&videoId=`;

export const SEARCH_SUGGESTION = `http://suggestqueries.google.com/complete/search?client=chrome&hjson=t&cp=1&q=`

export const OFFSET_LIVE_CHAT = 20;
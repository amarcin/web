import * as contentful from 'contentful'

//commenting out references until issue is resolved (SECURITY ISSUE)
export const client = contentful.createClient({
  space: 'n44ys8eqz51t', //process.env.REACT_APP_SPACE_ID,
  accessToken: '4ICMczM0r6vHVuWYBjvBDgTMRytqHih6HJKnXAt73J8' //process.env.REACT_APP_ACCESS_TOKEN
})
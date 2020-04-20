var axios = require('axios');
const COVERS = 'https://api-v3.igdb.com/covers';

class IGDBApiService {

    async getAllGames() {
        let self = new IGDBApiService();
        let request = self.createResquestToIGDB('games', 'POST', 'application/json', `fields *; limit 5;`);
        let games = await axios(request).then((response) => response.data);
        games = map(async game => {
            await self.getCoverByID(game.cover).then((response) => {
                game.url = response.data[0].url;
            });
        });
        await games;
        console.log(games);
    }

    getCoverByID(id) {
        let self = new IGDBApiService();
        let request = self.createResquestToIGDB('covers', undefined, undefined, `where id = ${id}; fields *;`);
        return axios(request);
    }

    createResquestToIGDB(url, verb = 'POST', accept = 'application/json', query) {
        return {
            url: `https://api-v3.igdb.com/${url}`,
            'method': verb,
            'headers': {
                'Accept': accept,
                'user-key': '8620e5a978cc1638375f39f416a69ab5'
            },
            data: query
        };
    }
}



// axios({
//     url: "https://api-v3.igdb.com/achievements",
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'user-key': API_KEY
//     },
//     data: "fields achievement_icon,category,created_at,description,external_id,game,language,locked_achievement_icon,name,owners,owners_percentage,rank,slug,tags,updated_at;"
//   })
//     .then(respons => {
//         console.loeg(response.data);
//     })
//     .catch(err => {
//         console.error(err);
//     });

module.exports = new IGDBApiService;
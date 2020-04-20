var axios = require('axios');
const Game = require('../../../domains/Game');
const ResponseJSON = require('../../../domains/ResponseJSON');
const COVERS = 'https://api-v3.igdb.com/covers';

class IGDBApiService {
    async getAllGames(page, res) {
        let self = new IGDBApiService();
        page = page * 10;
        let request = self.createResquestToIGDB('games', 'POST', 'application/json', `fields *; limit 55; offset ${page};`);
        let $games = await axios(request).then((response) => response.data);
        let games = await Promise.all($games.map(async game => {
            if (game !== undefined) {
                return await self.getCoverByID(game.cover).then((response) => {
                    let obj = new Game(game.id,
                        game.category,
                        response.data[0].url,
                        game.name,
                        game.rating,
                        game.summary);
                    return obj;
                }).catch(() => {
                    let obj = new Game(game.id,
                        game.category,
                        null,
                        game.name,
                        game.rating,
                        game.summary);
                    return obj;
                });
            }
        }));
        return res.status(200).json({
            status: 200,
            message: 'Get all games with success',
            body: await games,
            pageable: {
                page: (page / 10),
                total: 5000,
                limit: 10
            }
        });
    }

    async getCoverByID(id) {
        let self = new IGDBApiService();
        let request = self.createResquestToIGDB('covers', undefined, undefined, `where id = ${id}; fields *;`);
        return axios(request);
    }

    async getGameByName(name, page, res) {
        let self = new IGDBApiService();
        page = page * 10;
        let request = self.createResquestToIGDB('games', 'POST', 'application/json', `search "${name}"; fields *; limit 10; offset ${page};`);
        let $games = await axios(request).then((response) => response.data);
        let games = await Promise.all($games.map(async game => {
            if (game !== undefined) {
                return await self.getCoverByID(game.cover).then((response) => {
                    let obj = new Game(game.id,
                        game.category,
                        response.data[0].url,
                        game.name,
                        game.rating,
                        game.summary);
                    return obj;
                }).catch(() => {
                    let obj = new Game(game.id,
                        game.category,
                        null,
                        game.name,
                        game.rating,
                        game.summary);
                    return obj;
                });
            }
        }));
        return res.status(200).json({
            page: (page / 10),
            total: 5000,
            limit: 10,
            games: await games
        });
    }

    getGameByID(id) {

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

module.exports = new IGDBApiService;
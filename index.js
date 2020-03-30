const expressConfig = require('./src/config/expressConfig');
const app = expressConfig();

app.listen(process.env.PORT_EXPRESS, () => {
    console.log('server rodando');
});
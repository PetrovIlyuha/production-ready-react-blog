const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const jwt = require('jsonwebtoken');

const app = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
app.db = router.db;

const SERVER_PORT = 8000;

const getDb = () => JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

function isAuthenticated(req, res, returnData = 'data') {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "You're not authorized!" });
    }
    const jwtTokenEncoded = req.headers.authorization.split(' ')[1];
    const tokenInfo = jwt.decode(jwtTokenEncoded);
    if (!tokenInfo) {
        return res.status(401).json({ message: 'Access Token may be forged!' });
    }
    const data = getDb();
    const { users } = data;
    const authorizedUser = users.find((u) => u.id === +tokenInfo.sub && u.email === tokenInfo.email);
    if (!authorizedUser) {
        return res.status(401).json({ message: "You're not authorized!" });
    }
    delete authorizedUser.password;
    return returnData === 'data' ? data : authorizedUser;
}

app.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 500);
    });
    next();
});

app.get('/user', (req, res, next) => {
    const data = isAuthenticated(req, res, 'user');
    return res.json(data);
});

app.get('/posts', (req, res, next) => {
    const data = isAuthenticated(req, res);
    return res.json(data.posts);
});
app.get('/comments', (req, res, next) => {
    const data = isAuthenticated(req, res);
    return res.json(data.comments);
});

app.use(jsonServer.defaults());
app.use(auth);
app.use(router);

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on PORT=${SERVER_PORT}`);
});

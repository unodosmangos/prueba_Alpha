const { Router } = require('express');
const router = Router();

const User = require('../models/user')

const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({email, password});
    await newUser.save();
    
    const token = jwt.sign({_id: newUser._id}, 'secretkey')
    res.status(200).json({token})
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if (!user) return res.status(401).send("We didn't find this email in our database");
    if (user.password !==  password) return res.status(401).send('Wrong password, try again')

    const token = jwt.sign({_id: user._id}, 'secretkey')
    res.status(200).json({token})
})

router.get('/tasks', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task One',
            description: 'lorem impsum',
            date: "2023-03-12"
        },
        {
            _id: 2,
            name: 'Task Two',
            description: 'lorem impsum',
            date: "2023-03-12"
        },
        {
            _id: 3,
            name: 'Task Three',
            description: 'lorem impsum',
            date: "2023-03-12"
        }
    ])
})

router.get('/private-tasks', verifyToken, (req, res) => {
    res.json([ 
        {
            _id: 1,
            name: 'Task One',
            description: 'lorem impsum',
            date: "2023-03-12"
        },
        {
            _id: 2,
            name: 'Task Two',
            description: 'lorem impsum',
            date: "2023-03-12"
        },
        {
            _id: 3,
            name: 'Task Three',
            description: 'lorem impsum',
            date: "2023-03-12"
        }
    ])
})

module.exports = router;

function verifyToken (req, res, next) {
    if (!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null'){
        return res.status(401).send('Unauthorized request') 
    }

    const payload = jwt.verify(token, 'secretkey')
    req.userId = payload._id;
    next();
}
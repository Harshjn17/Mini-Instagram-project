const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service')
const postModal = require('./modals/post.modal')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())
const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single("image") ,async (req, res) => {
    
    const result = await uploadFile(req.file.buffer)

    const post = await postModal.create({
        image: result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: "Post created",
        post
    })
})

app.get('/feed', async (req, res) => {

    const posts = await postModal.find()

    res.status(201).json({
        message: "Post fetched",
        posts
    })
})

module.exports = app;
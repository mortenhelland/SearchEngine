const router = require('express').Router()
const keys = require('../config/keys')
const axios = require('axios')

router.get("/search", async (req, res) => {
    const response = await axios({
          method: 'get',
          url: 'https://www.googleapis.com/youtube/v3/search',
          params: {
            part: 'snippet',
            maxResults: 5,
            key : keys.youtubeAPI,
            q: req.query.q
        }
    })
    res.send(response.data)
})

module.exports = router
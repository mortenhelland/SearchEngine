const router = require('express').Router()
const keys = require('../config/keys')
const { Translate } = require('@google-cloud/translate');


const translate = new Translate({projectId: keys.googleProjecID});

router.post('/text', async (req,res) => {
    const [translation] = await translate.translate(req.body.data.text, req.body.data.l);
    res.send(translation)
})

router.get('/languages', async (req,res) => {
    const [languages] = await translate.getLanguages();
    res.send(languages)
})

module.exports = router
import axios from 'axios'

export const youtubeSearch = async q => {
    const response = await axios.get('/api/youtube/search', {
        params: {
            q
        }
    })
    return response.data
}

export const translate = async (text, l) => {
    const response = await axios.post('/api/translate/text', {
        data: {
            text,
            l
        }
    })
    return response.data
}

export const languages = async () => {
    const response = await axios.get('/api/translate/languages')
    return response.data
}


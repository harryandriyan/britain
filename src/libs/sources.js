import axios from 'axios'
import config from 'config'

const sources = {
  getSources ({ country = 'us' }) {
    let path = `${config.newsApiEndpoint}/sources?country=${country}&apiKey=${config.newsApiKey}`
    
    return axios.get(path).then(res => {
      return res.data
    })
  }
}

export default sources

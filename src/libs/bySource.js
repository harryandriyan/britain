import axios from 'axios'
import config from 'config'

const bySource = {
  getBySource ({ source = 'cnn' }) {
    let path = `${config.newsApiEndpoint}/top-headlines?sources=${source}&apiKey=${config.newsApiKey}`

    return axios.get(path).then(res => {
      return res.data
    })
  }
}

export default bySource

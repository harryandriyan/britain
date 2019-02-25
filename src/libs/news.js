import axios from 'axios'
import config from 'config'

const news = {
  getHeadlines ({ country = 'id' }) {
    let path = `${config.newsApiEndpoint}/top-headlines?country=${country}&apiKey=${config.newsApiKey}`
    
    return axios.get(path).then(res => {
      return res.data
    })
  }
}

export default news

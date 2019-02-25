import axios from 'axios'
import config from 'config'

const explore = {
  getHeadlines ({ word = 'pemilu' }) {
    let path = `${config.newsApiEndpoint}/everything?q=${word}&apiKey=${config.newsApiKey}`
    
    return axios.get(path).then(res => {
      return res.data
    })
  }
}

export default explore

const axios = require('axios')
const cheerio = require('cheerio')

module.exports = async function parse() {
   let team = []
    await axios.get('https://jetup.digital/team')
   .then(response => {
      var currentPage = response.data;
      const $ = cheerio.load(currentPage)
      let str =  $('#page-body > div.container.container-center > div > div > div > div ').text()
      
      let newstr = str.split('\n\n')
      let doparr = []
      for(let i = 0; i<newstr.length; i++){
         if(newstr[i]!=''){
            doparr.push(newstr[i])
         }
      }
      
      for(let i = 0; i<doparr.length; i+=2){
         let one_worker = {}
         let name_and_pos = doparr[i].split('\n')
         one_worker.name = name_and_pos[1]
         one_worker.position = name_and_pos[2]
         one_worker.description = doparr[i+1]
         team.push(one_worker)
      }
   })
   return team
}

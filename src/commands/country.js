const axios = require('axios')
module.exports = {
    name: 'country', 
    run: async (client, message, args) => {

        

        if(args.length == 1){
            await message.reply('Please enter country name')
            return
        }


        /*
            Props to use : 
            country.name.common, country.name.official, country.population, country.region, country.capital, country.flags.png
        */

        const countryName = args.splice(1, args.length + 1).join(" ")
        
        

        try {
            axiosData = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)

        if(axiosData.data == undefined){
            return
        }
        country = axiosData.data[0]

        } catch (error) {
            message.reply("Country not found")
        }
        
    }
}
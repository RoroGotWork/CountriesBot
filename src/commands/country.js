const axios = require('axios')
const CountryEmbed = require('../embeds/countryEmbed')
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

        country = axiosData.data[0]

        const name = country.name.common
        const officialName = country.name.official
        const capital = country.capital.join(", ")
        const region = country.region
        const population = country.population
        const flag = country.flags.png
        console.log(flag)


        embed = new CountryEmbed(name, officialName, capital, region, population, flag)
        message.channel.send({embeds : [embed]})

        } catch (error) {
            message.reply('Country not found')
        } 
        
    }
}
const axios = require('axios')
const CountryEmbed = require('../embeds/countryEmbed')
const CountryNotFoundEmbed = require('../embeds/countryNotFoundEmbed')

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

        const country = axiosData.data[0]

        const name = country.name.common
        const officialName = country.name.official
        const capital = country.capital.join(", ")
        const region = country.region
        const population = country.population
        const flag = country.flags.png
        console.log(flag)


        const countryEmbed = new CountryEmbed(name, officialName, capital, region, population, flag)
        message.channel.send({embeds : [countryEmbed]})

        } catch (error) {
            const countryNotFoundEmbed = new CountryNotFoundEmbed(countryName)

            message.channel.send({embeds: [countryNotFoundEmbed], files : countryNotFoundEmbed.getFileAttachment()})
        } 
        
    }
}
const axios = require("axios")
module.exports = {
    name: "country",
    run: async (client, message, args) => {

        console.log(args.length)
        if(args.length == 1){
            await message.reply("Please enter country name")
            return
        }

        axiosData = await axios.get("https://restcountries.com/v3.1/name/france")
        country = axiosData.data[0]
        console.log(country.population)

        /*
            Things : 
            country.name.common, country.population, country.region, country.capital, country.flags.png
        */


        const countryName = args[1]
        
    }
}
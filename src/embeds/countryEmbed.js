const {EmbedBuilder} = require('discord.js')

module.exports = class CountryEmbed extends EmbedBuilder{

    constructor(name, nameOfficial, capital, region, population, flagUrl){
        this.name = name
        this.nameOfficial = nameOfficial
        this.capital = capital
        this.region = region
        this.population = population
        this.flagUrl = flagUrl

        this.setTitle(name)
        this.setDescription(nameOfficial)
        this.setThumbnail(flagUrl)

        this.addFields(
            {name: "Region", value: region},
            {name: "Capital", value: capital},
            {}
        )
    }
}
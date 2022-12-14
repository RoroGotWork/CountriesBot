const {EmbedBuilder} = require('discord.js')
const numeral = require('numeral')

module.exports = class CountryEmbed extends EmbedBuilder{

    constructor(name, officialName, capitals, region, population, flagUrl){
        super()

        this.name = name
        this.officialName = this.officialName
        this.capitals = capitals
        this.region = region
        this.population = numeral(population).format('0,0')
        this.flagUrl = flagUrl

        this.setTitle(name)
        this.setDescription(officialName)
        this.setThumbnail(flagUrl)
        this.addFields({name: 'Capital', value: this.capitals})
        this.addFields({name: 'Region', value: this.region})
        this.addFields({name: 'Population', value: this.population})

        
    }

    

}
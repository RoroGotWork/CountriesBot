const {EmbedBuilder, AttachmentBuilder} = require('discord.js')

module.exports = class CountryNotFoundEmbed extends EmbedBuilder{
    constructor(country){
        super()
        this.errorImg = new AttachmentBuilder('./assets/img/error_icon.png')

        this.setTitle('Error ! ')
        this.setDescription(`Country '${country}' not found`)
        this.setThumbnail('attachment://error_icon.png')
    }



    getFileAttachment(){
        let list = []
        list.push(this.errorImg)

        return list
    }
}
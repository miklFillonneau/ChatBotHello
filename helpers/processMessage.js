const FACEBOOK_ACCESS_TOKEN = 'EAAEc6da9rMsBAOUkYsegucO0gHo0NZAjRl9RkZCov1qSriWwDxkRifRgUZABTwGpZA0oNTjrCAjorZC8gtGXtMON18dgbyGnAHLeXB1yWmzVDEYwO2LISGjOQcKJbIurBUxEFqtDnZB3rZAaI4daQi6DRZAzntGAZClMM1kZCNEwSVRuTZCBo5Hea4K';
const CAT_IMAGE_URL = 'https://botcube.co/public/blog/apiai-tutorial-bot/hosico_cat.jpg';
const request = require('request');


module.exports = (event) => {
    const senderId = event.sender.id;
    const message = event.message.text;
    console.log('fdgsdfghdfghdfgjhfghj');
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message: {
                attachment: {
                    type: 'image',
                    payload: { url: CAT_IMAGE_URL}
                }
            }
        }
    });
};
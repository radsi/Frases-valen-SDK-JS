const axios = require('axios')
class API{ 
constructor(token){
    this.token = token
}
async getPhrase(id){

    if(id == undefined || id == null){
        return await axios.get(`https://frasesvalen.antonioma.com/api/phrase/random`, {headers: {Authorization: "Bearer "+this.token}}).then(r=>r.data)
    }else{
        if(this.token){return await axios.get('https://frasesvalen.antonioma.com/api/phrase/'+id, {headers: {Authorization: "Bearer "+this.token}}).then(r=>r.data)}else{return await axios.get('https://frasesvalen.antonioma.com/api/phrase/'+id).then(r=>r.data)}
    }
}
async createPhrase(phrase, suggested_by){
    if(!this.token && suggested_by){return "TOKEN IS NECESSARY"} if(!phrase || phrase==""){return "PHRASE IS NECESSARY"} let req = "&phrase="+encodeURI(phrase); if(clip && clip != null){req += "&clip="+clip} if(videoId && videoId != null){req += "&video="+video} if(video_start && video_start != null){req += "&video_start="+video_start} if(video_end && video_end != null){req += "&video_end="+video_end} if(suggested_by && suggested_by != null && suggested_by != ""){req+="&suggested_by="+suggested_by} 
    const fvapi = await axios.create({
        baseURL: 'https://frasesvalen.antonioma.com/api/',
        headers: {'Authorization': "Bearer "+this.token}
    });
    return await fvapi.post('https://frasesvalen.antonioma.com/api/phrases/create?'+req).then(r=>r.data)
}

async createClip(phrase, clipId, suggested_by){
    if(!this.token && suggested_by){return "TOKEN IS NECESSARY"} if(!phrase || phrase==""){return "PHRASE IS NECESSARY"} let req = "&phrase="+encodeURI(phrase); if(clipId && clipId != null){req += "&clip="+clipId} if(suggested_by && suggested_by != null && suggested_by != ""){req+="&suggested_by="+suggested_by} 
    const fvapi = await axios.create({
        baseURL: 'https://frasesvalen.antonioma.com/api/',
        headers: {'Authorization': "Bearer "+this.token}
    });
    return await fvapi.post('https://frasesvalen.antonioma.com/api/phrases/create?'+req).then(r=>r.data)
}

async createVideo(phrase, videoId, video_start, video_end, suggested_by){
    if(!this.token && suggested_by){return "TOKEN IS NECESSARY"} if(!phrase || phrase==""){return "PHRASE IS NECESSARY"} let req = "&phrase="+encodeURI(phrase); if(videoId && videoId != null){req += "&video="+video} if(video_start && video_start != null){req += "&video_start="+video_start} if(video_end && video_end != null){req += "&video_end="+video_end} if(suggested_by && suggested_by != null && suggested_by != ""){req+="&suggested_by="+suggested_by} 
    const fvapi = await axios.create({
        baseURL: 'https://frasesvalen.antonioma.com/api/',
        headers: {'Authorization': "Bearer "+this.token}
    });
    return await fvapi.post('https://frasesvalen.antonioma.com/api/phrases/create?'+req).then(r=>r.data)
}

}

module.exports.API = API
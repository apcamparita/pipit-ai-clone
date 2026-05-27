const { exec } = require("child_process");

function animateFace(
image,
audio
){

return new Promise((resolve,reject)=>{

const cmd = `
python inference.py
--source_image ${image}
--driven_audio ${audio}
`;

exec(cmd,(err)=>{

if(err){
reject(err);
}else{
resolve(true);
}

});

});

}

module.exports = animateFace;

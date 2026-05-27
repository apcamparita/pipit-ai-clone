const { exec } = require("child_process");

function generateLipSync(
image,
audio,
output
){

return new Promise((resolve,reject)=>{

const command = `
python inference.py
--face ${image}
--audio ${audio}
--outfile ${output}
`;

exec(command,(err)=>{

if(err){
reject(err);
}else{
resolve(output);
}

});

});

}

module.exports = generateLipSync;
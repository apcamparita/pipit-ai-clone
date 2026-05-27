async function generateVideo() {

const formData = new FormData();

formData.append(
"photo",
document.getElementById("photo").files[0]
);

formData.append(
"audio",
document.getElementById("audio").files[0]
);

formData.append(
"prompt",
document.getElementById("prompt").value
);

formData.append(
"ratio",
document.getElementById("ratio").value
);

const response = await fetch(
"/api/generate",
{
method:"POST",
body:formData
}
);

const data = await response.json();

const video =
document.getElementById("video");

video.style.display = "block";

video.src = data.video;

document.getElementById(
"downloadBtn"
).href = data.video;

}
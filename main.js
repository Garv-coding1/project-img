function setup () {
    canvas = createCanvas(300,300);
    canvas.position(1000, 250);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/A0DsJjt9P/model.json", modelLoaded);
    
}

function draw () {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function modelLoaded() {
    console.log("The model is loaded!");
 
}


function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object_result_tag").innerHTML= results[0].label;
        multiply = results[0].confidence*100;
        decimal = multiply.toFixed(3);
        document.getElementById("object_accuracy_tag").innerHTML = decimal + "%";
    }
}
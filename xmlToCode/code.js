let slidesList
let xmlDoc;
let questionIndex = 0;
let newSubjData = {
    "questions": [],
    "missions": [],
    "newInfo": []
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       xml = xhttp.responseText;
       parseXML()
    }
};

xhttp.open("GET", "./realData.xml", true);
xhttp.send();


const parseXML = () => {
    const parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml,"text/xml");
    slidesList = evaluateXPath('//sld', xmlDoc, 'orderedArray');
    if (slidesList.length === 0) {
        console.error("Please use a formatter on the xml file (alt+shift+f)")
    }
    let type;
    for (slide of slidesList) {
        type = findSlideType(slide);
        if (type !== null && type !== 'title') {
            window[`${type}Slide`](slide); 
        }
    }
    // print 
    console.log(newSubjData);
    navigator.clipboard.writeText(JSON.stringify(newSubjData));
    alert('הועתק ללוח');
    document.getElementById('final-data').innerText = JSON.stringify(newSubjData)

}

const findSlideType = (slide) => {
    // let title = evaluateXPath('.//p[.//latin[@typeface = "Rubik"]][.//rPr[@sz="2800"]]', slide)
    // printArray(title)
    if (slide.innerHTML.includes('הכנסת מידע ללומדת סולמות וחבלים')) {
        return('title')
    } else if (slide.innerHTML.includes('הכנסת שאלות')) {
        return ('question')
    } else if (slide.innerHTML.includes('הכנסת משימות')) {
        return 'mission'
    } else if (slide.innerHTML.includes('הכנסת מידע')){
        return 'info'
    } else {
        console.error('no type on slide', slide);
        return null
    }
}

var questionSlide = (slide) => {
    questionIndex = newSubjData.questions.length;
    // get question by font
    question = evaluateXPath('.//r[.//latin[@typeface="Rubik SemiBold"]]', slide);
    textQuestion = getTxtFromEl(question[0]);
    // create new question object
    newSubjData.questions.push({});
    newSubjData.questions[questionIndex].question = textQuestion;
    // get answers by the shape they are inside, and it's background color
    let answers = evaluateXPath('.//sp[.//spPr/solidFill/schemeClr[@val="lt1"] and .//spPr/prstGeom[@prst = "roundRect"]]//r', slide)
    
    // filter empty answers
    answers = answers.filter((item) => {
        return getTxtFromEl(item) !== " " && getTxtFromEl(item).length > 0;
    })
    // answers = evaluateXPath('.//sp[.//spPr[./prstGeom[@prst = "roundRect"]][./solidFill/schemeClr[@val="bg1"]]]//r', slide)
    saveAnswers(answers, questionIndex);

    // Add explanation if exist (find based on font and the word "הסבר")
    let explainationP = evaluateXPath('.//p[contains(., "הסבר")][.//latin[@typeface="Rubik"]]', slide);
    explainationP.forEach(item => {
        newSubjData.questions[questionIndex].explanation = getTxtFromEl(item)
    })
}

let saveAnswers = (answers, questionIndex) => {
    // make sure there is the right amount of answers
    if (answers.length > 4) {
        console.error(`Too many possible answers. Change shape and font so relevant answers are in rounded rectangle with background color of #FFFFFF in `)
        printArray(answers);
    } else if (answers.length < 4) {
        console.error('Too few possible answers. Change shape and font so relevant answers are in rounded rectangle with background color of #FFFFFF')
        console.log(answers);
    } else {
        //  save answers
        for (index in answers) {
            newSubjData.questions[questionIndex][`ans${Number(index) + 1}`] = getTxtFromEl(answers[index])
            // if the text is green - saves the answer as correct
            if (document.evaluate('boolean(./rPr/solidFill/srgbClr[@val="00B050"])', answers[index], null, 3, null).booleanValue) {
                newSubjData.questions[questionIndex].correctAns = `${Number(index) + 1}`;
            }
        }
    }
}

var missionSlide = (slide) => {
    let missionsList = evaluateXPath('.//p[.//latin[@typeface="Rubik"]]', slide);
    for (mission of missionsList) {
        //  make  sure the title does not slip in
        if (!getTxtFromEl(mission).includes('הכנסת משימות')) {
            newSubjData.missions.push(getTxtFromEl(mission));
        }
    }
}

var infoSlide = (slide) => {
    let infoList = evaluateXPath('.//txBody[.//latin[@typeface="Rubik"]]', slide);
    for (info of infoList) {
        //  make  sure the title does not slip in
        if (!getTxtFromEl(info).includes('הכנסת מידע')) {
            newSubjData.newInfo.push(getTxtFromEl(info));
        }
    }

}

/* getOnlyHebrewText
------------------------------------------------- */
const getTxtFromEl = (el) => {
	text = '';
	for (textEl of el.getElementsByTagName('t')) {
		for (char of textEl.textContent) {
			if (/^[\u0590-\u05FF 0-9A-Za-z/:'"]+$/i.test(char)) {
				text += char;
			}
		}
		text += ' ';
	}
	return text;
}

/* purifyText
------------------------------------------------- */

const purifyText = (oldText) => {
	newText = '';
	for (char of oldText) {
		if (/^[\u0590-\u05FF 0-9A-Za-z/:'"]+$/i.test(char)) {
			newText += char;
		}
	}
	return newText;
}

const evaluateXPath = (expr, node, type='array') => {
    if (type === 'string') {
        return document.evaluate(expr, node, null, 2, null).stringValue
    } else {
        let typeNum = (type === 'orderedArray' ? 5: 0);
        const result = document.evaluate(expr, node, null, typeNum, null);
        const found = [];
        while (res = result.iterateNext()) {
            found.push(res);
        }
        return found;
    }   
}

const printArray = (array) => {
    array.forEach(item => console.log(item));
}
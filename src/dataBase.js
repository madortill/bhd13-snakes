//
//
//
// data on the game subjects (colors, images, names...)
const SUBJECTS = {
    // name of subject - מקראות ישראל
    "environment": {
        "number": 2,
        "sub-name": "משטרה <br> צבאית",
        "snakes-img": "../assets/images/opening/snakes-blue.svg",
        "img-sub": "../assets/images/opening/book.svg",
        "icon": "../assets/images/opening/icon-book.svg",
        "color-bg-opening": "--dark-blue",
        "color-bg": "--blue",
        "filter-btn-color": "drop-shadow(0px 2px 9px #08083a31)",
        "gradient": "--blue-gradient",
        "filter-bg-mission-and-questions": "none"
    },
};

//
//
//
// questions and missions on every game subject
const DATA = {
    // name of subject - היכר הסביבה 
    "environment":
    {
        "questions":
            [
                {
                    "question": "אילו אישורים צריך בשביל ליווי עצורי אויב ",
                    "ans1": "אישור בקשה וטופס מעבר ",
                    "ans2": "אישור שלילת חופשה וטופס בקשה ",
                    "ans3": "אישור מעבר ויומן מ\"צ ",
                    "correctAns": "3",
                    "ans4": "יומן מ\"צ ואישור ספירות"
                },
                {
                    "question": "אילו סוגי עצורי אויב קיימים ",
                    "ans1": "לוחם בלתי חוקי שוהה שלא כדין ",
                    "ans2": "כל התשובות נכונות ",
                    "correctAns": "2", "ans3": "פעיל טרור ", "ans4": "האזרח שבוי מלחמה "
                },
                {
                    "question": "למה צה\"ל צריך להחזיק עצורים במתקן כליאה ", 
                    "ans1": "קלף מיקוח מול האויב ",
                    "ans2": "איסוף מודיעין לעצור אנשים שמהווים סכנה ", 
                    "ans3": "לפנות את השטח לכוח הלוחם שיוכל לחזור למשימתו ",
                    "ans4": "תשובות 2,3 נכונות",
                    "correctAns": "4"
                }, {
                    "question": "האם לפני כל עליה למשמרת במתקן השהיה חייב להיות תדריך ",
                    "ans1": "כן ", "correctAns": "1", "ans2": "לא ", "ans3": "רק במידה ואין לחץ במתקן ההשהייה ", "ans4": "לשיקולו של המ\"מ תורן "
                }, {
                    "question": "מיהו השוויש ", "ans1": "הנבחר על ידי סגל המפקדים שבחרו ע\"פ נראות עין ",
                    "ans2": "עצור שמבין עברית נציג של שאר העצורים ", "correctAns": "2", "ans3": "מילת סלנג בחברה הרבית ",
                    "ans4": "אף תשובה לא נכונה "
                }, {
                    "question": "מי ישא נשק במתקן ", "ans1": "משטרה צבאית ", "ans2": "חמ\"ל ",
                    "ans3": "כוח לוחם ", "correctAns": "3", "ans4": "כוחות מרפאה "
                }, {
                    "question": "לאחר סוף אירוע קיצון מה עלינו לעשות ",
                    "ans1": "לחלק סיגריות הם צריכים להירגע ", "ans2": "העברת דיווח לחמ\"ל על סוף אירוע ספירת חירום ", "correctAns": "2",
                    "ans3": "ספירת חירום ", "ans4": "אך ורק לעדכן את מפקד המתקן "
                }, {
                    "question": "אילו סוגי ליווי של עצורי אויב יש ", "ans1":
                        "ליווי פנימי וליווי חיצוני ", "correctAns": "1", "ans2": "ליווי פנימי וליווי רב מימדי ",
                    "ans3": "ליווי חיצוני הכרחי וליווי פנימי רק במידת הצורך ", "ans4": "יש 4 סוגי ליווי "
                },
                {
                    "question": "סמנו את המשפט הלא נכון ", "ans1": "במקרה של סכנת חיים ברורה ומיידית יש לפתוח באש במידה הנדרשת להסרת סכנה ",
                    "ans2": "פתיחה באש תבוצע לעבר מקור האש שזוהה על מנת לפגוע במעורבים בפח\"ע באופן ישיר ובהקשר מיידי במרחב שממנו בוצע הירי ",
                    "ans3": "בכל נמ\"ח חייב לפחות שני חיילים שיפתחו באש במקביל עם שני נשקים שלהם ", "correctAns": "3",
                    "ans4": "בכל מקרה חל איסור לבצע ירי ללא הבחנה המסכן בלתי מעורבים או כוחות או\"ם "
                },
                {
                    "question": "מהו סדר הפעולות הנכון לנוהל מעצר חשוד ",
                    "ans1": "\"עצור והזדהה\" דריכת נשק ירי באוויר ירי פלג גוף תחתון ירי מרכז מסה ", "correctAns": "1",
                    "ans2": "ירי פלג גוף תחתון ירי באוויר \"עצור והזדהה\" דריכת נשק ירי מרכז מסה ",
                    "ans3": "\"עצור והזדהה\" דריכת נשק ירי באוויר ירי מרכז מסה ירי פלג גוף תחתון ",
                    "ans4": "\"עצור והזדהה\" ירי פלג גוף תחתון ירי למרכז מסה דריכת נשק ירי באוויר "
                },
                {
                    "question": "מהם משימות חיל המשטרה הצבאית בחירום ", "ans1": "כליאת אויב ", "ans2": "שליטה ושיטור במרחב ",
                    "ans3": "כל התשובות נכונות ", "correctAns": "3", "ans4": "שליטה בתנועות ובהיסע "
                },
                {
                    "question": "מהם הפעולות העיקריות שיש לעשות בעת שליטה בצירים ובהיסע ", "ans1": "פעילות שיטורית משולבת עם משטרת ישרא ",
                    "ans2": "פריסת סיורי פיקוח תעבורה במרחב לדיווח ויצירת תמונת מצב של הצירים ", "ans3": "תשובות אב נכונות ",
                    "correctAns": "3",
                    "ans4": "לעצור ולתת דוחות "
                }, {
                    "question": "מהם ראשי התיבות של נפ\"ק ",
                    "ans1": "נקודת פיקוח קיצונית ",
                    "ans2": "נקודת פיקוח קדמית ", "correctAns": "2",
                    "ans3": "נקודת פשיטה קדמית ",
                    "ans4": "נקודת פיתוח קרבית "
                }, {
                    "question": "מהם ראשי התיבות של ספ\"ת ",
                    "ans1": "סיוע פיתוח תעבורה ",
                    "ans2": "סיור פתיחה תעבורתי ",
                    "ans3": "סיוע פיקוח תנועה ",
                    "ans4": "סיור פיקוח תעבורה ", "correctAns":
                        "ans4"
                }, {
                    "question": "מהי ההגדרה למחבל ",
                    "ans1": "אדם היוצר סכנה ממשית ומיידית לחיי אדם או לחבלה חמורה לגופו של אדם ", "correctAns": "1",
                    "ans2": "אדם היוצר סכנה ממשית ומיידית ורץ לעבר אנשים ",
                    "ans3": "אדם אשר פגע באנשים אחרים ",
                    "ans4": "אדם אשר ידוע כי בכוונתו לפגוע באנשים "
                }, {
                    "question": "מה מבין הבאים אינו יעד אפשרי למעצר ",
                    "ans1": "חשוד בפשע מסוכן ",
                    "ans2": "כלי רכב חשוד ",
                    "ans3": "חייל לא מדוגם ", "correctAns": "3",
                    "ans4": "אדם אשר גנב תחמושת "
                }, {
                    "question": "אם יש מפקד בכוח הוא יבצע את הנמ\"ח נוהל מעצר חשוד ",
                    "ans1": "כןבמידה ויש מפקד בשטחהוא יבצע את הנמ\"ח ", "correctAns": "1",
                    "ans2": "כל חייל מזהה אירוע צריך לתפעל ללא אישור מפקדיו הנמצאים בשטח ",
                    "ans3": "החייל והמפקד יפתחו נמ\"ח ביחד ",
                    "ans4": "החייל יתקשר למפקדיו על מנת לבקש אישור לפתוח נמ\"ח "
                }, {
                    "question": "עם מה נאזוק עצורי אויב ",
                    "ans1": "אזיקונים, אזיקים ", "correctAns": "1",
                    "ans2": "אזיקים בלבד ",
                    "ans3": "פלנלית ",
                    "ans4": "איזו לירבנד "
                }, {
                    "question": "במקרה של אירוע קיצון למי נדווח ",
                    "ans1": "למפקד בה\"ד 13 ",
                    "ans2": "דיווח למרפאת המתקן ",
                    "ans3": "דיווח לשוויש ",
                    "ans4": "דיווח לחמ\"ל ומפקד תורן ", "correctAns":
                        "ans4"
                }, {
                    "question": "מתי נבצע חיפוש על גופו של העצור ",
                    "ans1": "בכל כניסה ויציאה של העצור מהמתקן ", "correctAns": "1",
                    "ans2": "אך ורק ביציאה למרפאה ",
                    "ans3": "בעת חזרתו של הכלוא מהשב\"כ ",
                    "ans4": "אך ורק בקבלתו למתקן "
                }, {
                    "question": "מהם שלבי הקמת המחסום לפי הסדר ",
                    "ans1": "דוקרנים פנס \"נצנץ\" משולש עצור משולש האט ",
                    "ans2": "משולש עצור משולש האט דוקרנים פנס \"נצנץ\" ",
                    "ans3": "משולש האט משולש עצור דוקרנים פנס \"נצנץ\" ", "correctAns": "3",
                    "ans4": "פנס \"נצנץ\" משולש עצור משולש האט דוקרנים "
                }, {
                    "question": "באישור של מי תתאפשר אזיקה מאחורי הגב ",
                    "ans1": "באישור מ\"מ תורן ",
                    "ans2": "כל מפקד על פי שיקול דעתו ",
                    "ans3": "באישור מפקד המתקן ", "correctAns": "3",
                    "ans4": "כל קצין שנוכח "
                }, {
                    "question": "במידה והוצאתי ציוד משקית אטומה מה עלי לעשות איתה לאחר הוצאת הציוד ",

                    "ans1": "לזרוק את השקית עם הציוד הלא רלוונטי לפח ",
                    "ans2": "לקשור את השקית ולהחזיר למקומה ",
                    "ans3": "לא פותחים שקית פיקדון כלל לאחר שנאטמה ",
                    "ans4": "מעדכנים את רשימת הציוד שנשאר בשקית ואוטמים בשקית חדשה ", "correctAns":"ans4"
                }, {
                    "question": "מהו איזור לחימה ",
                    "ans1": "אזור סגור ",
                    "ans2": "אזור שיש בו לוחמים ",
                    "ans3": "אזור הסגור הצו אלוף ", "correctAns": "3",
                    "ans4": "אזור שנלחמים בו "
                }, {
                    "question": "מי היה הקמצ\"ר הראשון ",
                    "ans1": "תא\"ל יאיר ברקת ",
                    "ans2": "תא\"ל אביחי מיבר ",
                    "ans3": "סא\"ל דני מגן ", 
                    "correctAns": "3",
                    "ans4": "תשובות אב נכונות "
                }, {
                    "question": "מהו כוח סביר ",
                    "ans1": "הכוח הנפשי המקסימלי לצורך קיום פקודה חוקית ",
                    "ans2": "הכוח הפיזי המקסימלי אותו מד\"כ יפעיל בנוכחותו של קצין ",
                    "ans3": "הכוח הפיזי המינימלי הנדרש קיום פקודה חוקית שלא ניתן לבצע בדרך אחרת ", 
                    "correctAns": "3",
                    "ans4": "הכוח בו מותר למד\"כ להשתמש על חייליו על מנת לגרום להם לבצע פעולה מסוימת "
                }, {
                    "question": "מה הוא שבוי מלחמה ",
                    "ans1": "אדם שלקח חלק בפעילות לחימה ומשתייך לצבא מסודר ", 
                    "correctAns": "1",
                    "ans2": "אדם שלקח חלק בפעולות טרור כנגד המדינה ולא משתייך לארגון מסודר ",
                    "ans3": "תושב איוש בעל תעודה כתומה או ירוקה אשר לקח חלק בפעילות נגד מדינת ישראל ",
                    "ans4": "אדם בעל תעודה כחולה אשר נדרש לעיכוב או מעצר זמני "
                }, {
                    "question": "סמנו את המשפט הלא נכון ",
                    "ans1": "נפק הוא כלי עזר לשליטה בצירים ",
                    "ans2": "תפקידי הנפ\"ק לאפשר תנועה במרחב ולשקף תמונת מצב שיטורית לרמה הממונה ",
                    "ans3": "נפ\"ק הינו קבוע ולא ניתן להזיזו ", 
                    "correctAns": "3",
                    "ans4": "בנפ\"ק לא יהיו פחות מ2 חיילים "
                }, {
                    "question": "מהו מחסום הרמטי ",
                    "ans1": "מחסום לצורך בדיקת רכבים ",
                    "ans2": "מחסום לצורך סגירת שטח של אזורי לחימה ",
                    "ans3": "מחסום לסגירה מלאה של הציר ", 
                    "correctAns": "3",
                    "ans4": "מחסום אשר מפנה לציר אחר "
                }, {
                    "question": "למי כפוף חיל המשטרה הצבאית בחירום ",
                    "ans1": "אכ\"א אגף כוח האדם ",
                    "ans2": "חיל המשטרה הצבאית ", "ans3": "אט\"ל אגף הטכנולוגיה ואחזקה ", "correctAns": "3", "ans4": "פיקוד דרום "
                }, {
                    "question": "מהי אינה משימת השיטור במגננה ",
                    "ans1": "ריכוז תמונת מצב שיטורית ",
                    "ans2": "סיוע שיטורי בצירי התנועה וריכוז סדר הכוחות ",
                    "ans3": "ביצוע פעולות מנע בדגש על אמצעי לחימה ", 
                    "correctAns": "3",
                    "ans4": "הכוונה וליווי של שדרות אספקה "
                }, {
                    "question": "האם צריך צו אישור לביצוע חיפוש ",
                    "ans1": "כן ללא אישור אי אפשר לעשות חיפוש ",
                    "ans2": "לא אין צורך באישור וביצוע חיפוש ", 
                    "correctAns": "2",
                    "ans3": "כן רק במשמרת לילה ",
                    "ans4": "כן רק במשמרת יום "
                }, ], 
                "newInfo": [
                    "המסמך האסטרטגי ותפיסת ההפעלה בחמ\"ץ ייעוד המשטרה הצבאית: מתן מענה שיטורי כליאתי חקירתי ובידוק בטחוני במלחמה בביטחון השותף ובשגרה כל זאת על מנת לאפשר לצה\"ל לממש את ייעודו חזון משטרה צבאית: המשטרה הצבאית חיל למופת: ערכי אישי מקצועי תכלית קיומו של החיל טמון ביכולתו לסייע לצבא לממש את ייעודו ולנצח במלחמה תכלית זו גוזרת שורה של מעשים במעגלים שונים המתרכזים במניעת סדקים בחוסנו של הצבא מתוך ההבנה העמוקה שרק צבא איתן וחזק יוכל לקמים עלינו מקורות העוצמה של חמ\"ץ המשפיעים על תפיסת ההפעלה הינם: גמישות פריסה רחבה ומהירות תגובה משמעת גבוהה שת\"פ ושפה משותפת עם גורמי האכיפה המקבילים בארץ מייעוד הצבא מתחלית הקיום ומהחזון ייגזרו כל פעולותיו זוהי הרוח השורה במקומות בהם המפקדים נמצאים במקומות שאינם.", 
                    `מי מורשה להיכנס לאיזור לחימה? <br>
                    <ul>
                        <li>חייל או שוטר לשם ביצוע תפקידו</li>
                        <li>עיתונאים מאושרים על ידי דובר צה\"ל</li>
                        <li> בעלי משק באיזור הסגור בעלי אישור מתאים</li>
                        <li> תושבים מקומיים לאחר בדיקת תעודת זהות</li>
                        <li> נהגי משאיות חלוקה של חברות מזון מאושרים על ידי החמ\"ל האיזורי </li>
                    </ul>`, 
                    `<b>מהו מחסום?</b><br> מחסום הוא בעצם אמצעי לסינון רכבים במצב שגרה וחירום באזורים הדרושים לכך קיימות שתי צורות הפעלה של מחסום: מחסום קבע ומחסום פתע <br><b>מחסום קבע:</b> זהו מחסום ששגרת החיים בו תהיה זהה לשגרת מוצב השינה והשמירה יהיו במשמרות קבועות ובמקום יהיו אמצעי קיום בסיסיים כגון אמצעי חימום ובישול <br><b>מחסום פתע:</b> זהו מחסום שהקמתו תהיה בהתראה מאוד קצרה ולכן יש להקים אותו במהירות ובצורה היעילה ביותר.`]
    }
}


//
//
//
// GAME MAP:
// 
// E = empty space
// NI = new info 
// BH = black hole
// ST + number = snake and the end of his tail + his serial number (example: ST2)
// SH + number = snake head + his serial number (example: SH2)
// LB + number = ladder bottom (example: LB4)
// LT + number = ladder top (example: LT4)
const MAP = [
    /*start 0*/"START", /*1*/"E", /*2*/"E", /*3*/"ST1", /*4*/"E",/*5*/"LB1",/*6*/"ST2",/*7*/"E", /*8*/"LB2",/*9*/"E", /*10*/"NI",
    /*11*/"E", /*12*/"LB3", /*13*/"E", /*14*/"LT2",/*15*/"E",/*16*/"LB4",/*17*/"NI", /*18*/"E",/*19*/"E", /*20*/"E",
    /*21*/"E", /*22*/"NI", /*23*/"E", /*24*/"SH1",/*25*/"ST3",/*26*/"LT1",/*27*/"E", /*28*/"BH",/*29*/"LT4", /*30*/"NI",
    /*31*/"SH2", /*32*/"LT3", /*33*/"E", /*34*/"E",/*35*/"E",/*36*/"NI",/*37*/"E", /*38*/"ST4",/*39*/"E", /*40*/"LB5",
    /*41*/"NI", /*42*/"E", /*43*/"ST5", /*44*/"E",/*45*/"E",/*46*/"SH3",/*47*/"SH5", /*48*/"LB6",/*49*/"LT5", /*50*/"E",
    /*51*/"E", /*52*/"BH", /*53*/"ST6", /*54*/"E",/*55*/"LB7",/*56*/"E",/*57*/"LT7", /*58*/"E",/*59*/"E", /*60*/"NI",
    /*61*/"E", /*62*/"SH4", /*63*/"E", /*64*/"LT6",/*65*/"NI",/*66*/"E",/*67*/"E", /*68*/"ST7",/*69*/"E", /*70*/"NI",
    /*71*/"LB8", /*72*/"ST8", /*73*/"SH6", /*74*/"LB9",/*75*/"NI",/*76*/"E",/*77*/"BH", /*78*/"E",/*79*/"LB10", /*80*/"E",
    /*81*/"E", /*82*/"LT9", /*83*/"E", /*84*/"E",/*85*/"E",/*86*/"E",/*87*/"LB11", /*88*/"SH7",/*89*/"E", /*90*/"NI",
    /*91*/"LT11", /*92*/"LT8", /*93*/"E", /*94*/"E",/*95*/"NI",/*96*/"SH8",/*97*/"LT10", /*98*/"E",/*99*/"E",
    /*100*/"END", /*101*/"END",/*102*/"END",/*103*/"END",/*104*/"END",/*105*/"END"
];



// מפת הבסיס בלי כלום עליה
// const MAP = [
//     /*start 0*/"START", /*1*/"E", /*2*/"E", /*3*/"E", /*4*/"E",/*5*/"E",/*6*/"E",/*7*/"E", /*8*/"E",/*9*/"E", /*10*/"E",
//     /*11*/"E", /*12*/"E", /*13*/"E", /*14*/"E",/*15*/"E",/*16*/"E",/*17*/"E", /*18*/"E",/*19*/"E", /*20*/"E",
//     /*21*/"E", /*22*/"E", /*23*/"E", /*24*/"E",/*25*/"E",/*26*/"E",/*27*/"E", /*28*/"E",/*29*/"E", /*30*/"E",
//     /*31*/"E", /*32*/"E", /*33*/"E", /*34*/"E",/*35*/"E",/*36*/"E",/*37*/"E", /*38*/"E",/*39*/"E", /*40*/"E",
//     /*41*/"E", /*42*/"E", /*43*/"E", /*44*/"E",/*45*/"E",/*46*/"E",/*47*/"E", /*48*/"E",/*49*/"E", /*50*/"E",
//     /*51*/"E", /*52*/"E", /*53*/"E", /*54*/"E",/*55*/"E",/*56*/"E",/*57*/"E", /*58*/"E",/*59*/"E", /*60*/"E",
//     /*61*/"E", /*62*/"E", /*63*/"E", /*64*/"E",/*65*/"E",/*66*/"E",/*67*/"E", /*68*/"E",/*69*/"E", /*70*/"E",
//     /*71*/"E", /*72*/"E", /*73*/"E", /*74*/"E",/*75*/"E",/*76*/"E",/*77*/"E", /*78*/"E",/*79*/"E", /*80*/"E",
//     /*81*/"E", /*82*/"E", /*83*/"E", /*84*/"E",/*85*/"E",/*86*/"E",/*87*/"E", /*88*/"E",/*89*/"E", /*90*/"E",
//     /*91*/"E", /*92*/"E", /*93*/"E", /*94*/"E",/*95*/"E",/*96*/"E",/*97*/"E", /*98*/"E",/*99*/"E",
//     /*100*/"END", /*101*/"END",/*102*/"END",/*103*/"END",/*104*/"END",/*105*/"END"
// ];

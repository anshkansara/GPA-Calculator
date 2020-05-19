function myFunc() {
  var theCredits = document.getElementsByName('credits');
  var theGrades = document.getElementsByName('letter');
  var isMajor = document.getElementsByName('majorBox');
  var isCustom = document.getElementsByName('customBox');

  var i;
  var oGradeSum = 0;
  var mGradeSum = 0;
  var cGradeSum = 0;
  var oCreds = 0;
  var mCreds = 0;
  var cCreds = 0;
  var text = "";
  for (i = 0; i < theCredits.length; i++) {
    if (theCredits[i].value !== "" && theCredits[i].value > 0){
      switch (theGrades[i].value.toUpperCase()) {
      case "A+":
        oGradeSum += 9 * theCredits[i].value;
        oCreds += parseFloat(theCredits[i].value);
        if (isMajor[i].checked) {
          mGradeSum += 9 * theCredits[i].value;
          mCreds += parseFloat(theCredits[i].value);;
        }
        if (isCustom[i].checked) {
          cGradeSum += 9 * theCredits[i].value;
          cCreds += parseFloat(theCredits[i].value);;
        }
        break;
      case "A":
        oGradeSum += 8 * theCredits[i].value;
        oCreds += parseFloat(theCredits[i].value);
        if (isMajor[i].checked) {
          mGradeSum += 8 * theCredits[i].value;
          mCreds += parseFloat(theCredits[i].value);;
        }
        if (isCustom[i].checked) {
          cGradeSum += 8 * theCredits[i].value;
          cCreds += parseFloat(theCredits[i].value);;
        }
        break;
      case "B+":
        oGradeSum += 7 * theCredits[i].value;
        oCreds += parseFloat(theCredits[i].value);
        if (isMajor[i].checked) {
          mGradeSum += 7 * theCredits[i].value;
          mCreds += parseFloat(theCredits[i].value);;
        }
        if (isCustom[i].checked) {
          cGradeSum += 7 * theCredits[i].value;
          cCreds += parseFloat(theCredits[i].value);;
        }
        break;
      case "B":
        oGradeSum += 6 * theCredits[i].value;
        oCreds += parseFloat(theCredits[i].value);
        if (isMajor[i].checked) {
          mGradeSum += 6 * theCredits[i].value;
          mCreds += parseFloat(theCredits[i].value);;
        }
        if (isCustom[i].checked) {
          cGradeSum += 6 * theCredits[i].value;
          cCreds += parseFloat(theCredits[i].value);;
        }
        break;
      case "C+":
        oGradeSum += 5 * theCredits[i].value;
        oCreds += parseFloat(theCredits[i].value);
        if (isMajor[i].checked) {
          mGradeSum += 5 * theCredits[i].value;
          mCreds += parseFloat(theCredits[i].value);;
        }
        if (isCustom[i].checked) {
          cGradeSum += 5 * theCredits[i].value;
          cCreds += parseFloat(theCredits[i].value);;
        }
        break;
      case "C":
        oGradeSum += 4 * theCredits[i].value;
        oCreds += parseFloat(theCredits[i].value);
        if (isMajor[i].checked) {
          mGradeSum += 4 * theCredits[i].value;
          mCreds += parseFloat(theCredits[i].value);;
        }
        if (isCustom[i].checked) {
          cGradeSum += 4 * theCredits[i].value;
          cCreds += parseFloat(theCredits[i].value);;
        }
        break;
      case "D+":
        oGradeSum += 3 * theCredits[i].value;
        oCreds += parseFloat(theCredits[i].value);
        if (isMajor[i].checked) {
          mGradeSum += 3 * theCredits[i].value;
          mCreds += parseFloat(theCredits[i].value);;
        }
        if (isCustom[i].checked) {
          cGradeSum += 3 * theCredits[i].value;
          cCreds += parseFloat(theCredits[i].value);;
        }
        break;
      case "D":
        oGradeSum += 2 * theCredits[i].value;
        oCreds += parseFloat(theCredits[i].value);
        if (isMajor[i].checked) {
          mGradeSum += 2 * theCredits[i].value;
          mCreds += parseFloat(theCredits[i].value);;
        }
        if (isCustom[i].checked) {
          cGradeSum += 2 * theCredits[i].value;
          cCreds += parseFloat(theCredits[i].value);;
        }
        break;
      case "E":
        oGradeSum += 1 * theCredits[i].value;
        oCreds += parseFloat(theCredits[i].value);
        if (isMajor[i].checked) {
          mGradeSum += 1 * theCredits[i].value;
          mCreds += parseFloat(theCredits[i].value);;
        }
        if (isCustom[i].checked) {
          cGradeSum += 1 * theCredits[i].value;
          cCreds += parseFloat(theCredits[i].value);;
        }
        break;
      case "F":
        oGradeSum += 0 * theCredits[i].value;
        oCreds += parseFloat(theCredits[i].value);
        if (isMajor[i].checked) {
          mGradeSum += 0 * theCredits[i].value;
          mCreds += parseFloat(theCredits[i].value);;
        }
        if (isCustom[i].checked) {
          cGradeSum += 0 * theCredits[i].value;
          cCreds += parseFloat(theCredits[i].value);;
        }
        break;
      default:
        oGradeSum += 0;
      }
    }
  }

  if (oCreds == 0) {
    oCreds = 1;
  }
  if (mCreds == 0) {
    mCreds = 1;
  }
  if (cCreds == 0) {
    cCreds = 1;
  }

  document.getElementById('answer1').innerHTML = "Overall CGPA: " + (parseFloat(oGradeSum)/oCreds).toFixed(2);
  document.getElementById('answer2').innerHTML = "Major GPA: " + (parseFloat(mGradeSum)/mCreds).toFixed(2);
  document.getElementById('answer3').innerHTML = "Custom GPA: " + (parseFloat(cGradeSum)/cCreds).toFixed(2);
}

function saveFunc() {
  confirm("Are you sure? Saving will overwrite your previously saved data and replace it with current input data."
 + " WARNING: Clearing your browser's cookies and/or cache will ERASE your saved data.");
  localStorage.clear();
  var storedCourses = document.getElementsByName('course');
  var storedCreds = document.getElementsByName('credits');
  var storedGrades = document.getElementsByName('letter');
  var storedIsMajor = document.getElementsByName('majorBox');
  var storedIsCustom = document.getElementsByName('customBox');

  var courseArray = new Array(storedCourses.length);
  var credsArray = new Array(storedCreds.length);
  var gradesArray = new Array(storedGrades.length);
  var majorArray = new Array(storedIsMajor.length);
  var customArray = new Array(storedIsCustom.length);

  var i;
    for (i = 0; i < storedCreds.length; i++) {
    courseArray[i] = storedCourses[i].value;
    credsArray[i] = storedCreds[i].value;
    gradesArray[i] = storedGrades[i].value;
    if (storedIsMajor[i].checked == true) {
      majorArray[i] = true;
    }
    if (storedIsCustom[i].checked == true) {
      customArray[i] = true;
    }
  }
  localStorage.setItem("allCourses", JSON.stringify(courseArray));
  localStorage.setItem("allCreds", JSON.stringify(credsArray));
  localStorage.setItem("allGrades", JSON.stringify(gradesArray));
  localStorage.setItem("allMajor", JSON.stringify(majorArray));
  localStorage.setItem("allCustom", JSON.stringify(customArray));

}

function loadFunc() {
  confirm("Are you sure? Loading will erase all of your current input data and replace it with previously saved data.");
  var loadedCourses = localStorage.getItem("allCourses");
  var loadedCreds = localStorage.getItem("allCreds");
  var loadedGrades = localStorage.getItem("allGrades");
  var loadedMajor = localStorage.getItem("allMajor");
  var loadedCustom = localStorage.getItem("allCustom");

  var courseA = JSON.parse(loadedCourses);
  var credsA = JSON.parse(loadedCreds);
  var gradesA = JSON.parse(loadedGrades);
  var majorA = JSON.parse(loadedMajor);
  var customA = JSON.parse(loadedCustom);

  var placeCourses = document.getElementsByName('course');
  var placeCreds = document.getElementsByName('credits');
  var placeGrades = document.getElementsByName('letter');
  var placeMajor = document.getElementsByName('majorBox');
  var placeCustom = document.getElementsByName('customBox');

  var i;
    for (i = 0; i < courseA.length; i++) {
      placeCourses[i].value = courseA[i];
      placeCreds[i].value = credsA[i];
      placeGrades[i].value = gradesA[i];
      majorA[i] == true ? placeMajor[i].checked = true : placeMajor[i].checked = false
      customA[i] == true ? placeCustom[i].checked = true : placeCustom[i].checked = false
    }
}

// alert("loading");

let count = 1;
function addNewWEField() {
  //   console.log("Adding new field");

  tinymce.remove(`.weField`);

  let workFormFields = document.querySelector(".work-form-field");

  let newNode = workFormFields.cloneNode(true);

  let num = `workDiv${count + 1}`;
  let num1 = `textarea${count+1}`;

  newNode.querySelector(".we-name-field").value = "";
  newNode.querySelector(".we-start-date-field").value = "";
  newNode.querySelector(".we-end-date-field").value = "";
  newNode.querySelector(".weField").value = "";
  
  // console.log(num1);
  newNode.querySelector(".weField").setAttribute("id", num1);

  newNode.querySelector(".end-date-div").style.display = "block";
  newNode.querySelector(".presentcheckbox").checked = false;

  newNode.setAttribute("id", num);

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);

  document
    .getElementById(num)
    .querySelector(
      ".work-close-btn"
    ).innerHTML = `<i class="fa fa-close" onclick=RemoveHtmlElementWork(${num})></i>`;

  // console.log(num);

  count++;

  addTinyMCEWorkField();
}

let count2 = 1;
function addNewAQField() {
  tinymce.remove(`.eqField`);

  let aqFormFields = document.querySelector(".aq-form-field");

  let newNode = aqFormFields.cloneNode(true);

  let num = `aqDiv${count2 + 1}`;
  let num1 = `aqTextArea${count2 + 1}`;

  newNode.querySelector(".aq-name-field").value = "";
  newNode.querySelector(".aq-degree-field").value = "";
  newNode.querySelector(".aq-start-date-field").value = "";
  newNode.querySelector(".aq-end-date-field").value = "";
  newNode.querySelector(".eqField").value = "";

  newNode.querySelector(".eqField").setAttribute("id", num1);

  newNode.setAttribute("id", num);

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);

  document
    .getElementById(num)
    .querySelector(
      ".aq-close-btn"
    ).innerHTML = `<i class="fa fa-close" onclick=RemoveHtmlElementAQ(${num})></i>`;

  // console.log(num);

  count2++;

  addTinyMCEAQField();
}

let count3 = 1;
function addSkillsField() {
  let skillFormField = document.querySelector(".skill-div");

  let newNode = skillFormField.cloneNode(true);

  let num = `skillDiv${count3 + 1}`;

  newNode.querySelector(".skill-name-field").value = "";
  newNode.querySelector(".myRange").value = "4";
  newNode.querySelector(".level").innerHTML = "Experience";
  newNode.querySelector(".level").style.color = "green";
  newNode.querySelector(".slider").style.setProperty("--sliderColor", "green");
  newNode.querySelector(".slider").style.backgroundColor =
    "rgba(0, 128, 0, 0.3)";

  newNode.setAttribute("id", num);

  let skillOb = document.getElementById("skillArea");
  let skillButton = document.getElementById("skillAddButton");

  skillOb.insertBefore(newNode, skillButton);

  document
    .getElementById(num)
    .querySelector(
      ".skill-close-btn"
    ).innerHTML = `<i class="fa fa-close" onclick=RemoveHtmlElementSkill(${num})></i>`;

  count3++;
}

//generating cv
function generateCV() {
  // console.log("generating CV");

  // tinymce.remove(`.weField`);
  // tinymce.remove(`.eqField`);

  document.body.style.backgroundColor = "white";

  let nameField = document.getElementById("nameField").value;

  let nameElement = document.getElementById("nameElement");

  nameElement.innerHTML = nameField;

  let roleField = document.getElementById("roleField").value;

  let roleElement = document.getElementById("roleElement");

  roleElement.innerHTML = roleField;

  //direct

  document.getElementById("nameElement").innerHTML = nameField;
  document.getElementById("nameElement").style.textTransform = "uppercase";

  document.getElementById("roleElement").innerHTML = roleField;

  //contact
  document.getElementById("contactNumber").innerHTML =
  document.getElementById("contactField").value;

  //Email
  document.getElementById("emailID").innerHTML =
  document.getElementById("emailField").value;

  //address
  document.getElementById("address").innerHTML =
  document.getElementById("addressField").value;

  //links

  document.getElementById("linkedinLink").innerHTML =
  document.getElementById("linkedInField").value;
  document.getElementById("githubLink").innerHTML =
  document.getElementById("ghField").value;
  document.getElementById("instagramLink").innerHTML =
  document.getElementById("instaField").value;


  //SKILLFIELD
  let skills = document.querySelectorAll(".skill-div");

  let skillBuild = document.querySelector(".bars");
  let skillStr = "";
  skillBuild.innerHTML = "";

  for (let i=0; i < skills.length; i++)
  {
    // console.log(skills[i].querySelector(".skill-name-field").value);
    // console.log(skills[i].querySelector(".slider").value);

    skillStr =
    `
      
      <div class="bar" id="skillSet${i}">
        <p>${skills[i].querySelector(".skill-name-field").value}</p>
        <span class="skillBar"></span>
      </div>

      `;
      
      if (skills[i].querySelector(".skill-name-field").value == "")
      {
        break;
      }
      
      skillBuild.innerHTML += skillStr;

      if (skills[i].querySelector(".slider").value==1)
      {
        document.getElementById(`skillSet${i}`).querySelector(".skillBar").style.setProperty("--skillWidth", "28%");
      }
      
      else if (skills[i].querySelector(".slider").value==2)
      {
        document.getElementById(`skillSet${i}`).querySelector(".skillBar").style.setProperty("--skillWidth", "55%");
      }
      if (skills[i].querySelector(".slider").value==3)
      {
        document.getElementById(`skillSet${i}`).querySelector(".skillBar").style.setProperty("--skillWidth", "78%");
      }
      if (skills[i].querySelector(".slider").value==4)
      {
        document.getElementById(`skillSet${i}`).querySelector(".skillBar").style.setProperty("--skillWidth", "98%");
      }
  }

  
  

  //About

  // document.getElementById("aboutValue").innerHTML = document.getElementById(
  //   "aboutField"
  // ).value;

  document.getElementById("aboutValue").innerHTML = tinymce.get("aboutField").getContent();

  //Work Experience

  let wes = document.querySelectorAll(".work-form-field");

  //we-name-field
  //we-start-date-field
  //we-end-date-field
  //weField

  let workExperience = document.querySelector(".work");
  let str = "";

  for (let i = 0; i < wes.length; i++) {
    // console.log("wes " + wes[i].querySelector(".we-name-field").value);
    // console.log("wes " + wes[i].querySelector(".we-start-date-field").value);
    // console.log("wes " + wes[i].querySelector(".we-end-date-field").value);
    // console.log("wes " + wes[i].querySelector(".weField").value);

    let textAreaId = `textarea${i+1}`;

    str =
      str +
      `
    <div class="work-group">

      <h3>${wes[i].querySelector(".we-name-field").value}</h3>

      <span>${wes[i].querySelector(".we-start-date-field").value} - `;

    if (wes[i].querySelector(".presentcheckbox").checked) {
      str = str + "Present";
    } else {
      str = str + `${wes[i].querySelector(".we-end-date-field").value}`;
    }
    str =
      str +
      `</span>

      <p>${tinymce.get(textAreaId).getContent()}</p>
      
      </div>
      
      `;
      // <p>${wes[i].querySelector(".weField").value}</p>
  }

  workExperience.innerHTML = str;


  //ACADEMIC QUALIFICATION

  let aqs = document.querySelectorAll(".aq-form-field");

  //aq-name-field
  //aq-degree-field
  //aq-start-date-field
  //aq-end-date-field
  //eqField

  let academicQualification = document.querySelector(".education");
  let str1 = "";

  for (let i = 0; i < aqs.length; i++) {
    // console.log("aqs " + aqs[i].querySelector(".aq-name-field").value);
    // console.log("aqs " + aqs[i].querySelector(".aq-degree-field").value);
    // console.log("aqs " + aqs[i].querySelector(".aq-start-date-field").value);
    // console.log("aqs " + aqs[i].querySelector(".aq-end-date-field").value);
    // console.log("aqs " + aqs[i].querySelector(".eqField").value);

    let textAreaId = `aqTextArea${i+1}`;
    console.log(textAreaId);

    str1 =
      str1 +
      `
    <div class="edu-group">

      <h4>${aqs[i].querySelector(".aq-name-field").value} <br> ${
        aqs[i].querySelector(".aq-degree-field").value
      }</h4>

      <span>${aqs[i].querySelector(".aq-start-date-field").value} - ${
        aqs[i].querySelector(".aq-end-date-field").value
      }</span>

      <p>${tinymce.get(textAreaId).getContent()}</p>
      
      </div>
      
      `;
      // <p>${aqs[i].querySelector(".eqField").value}</p>
  }

  academicQualification.innerHTML = str1;

  // addTinyMCEWorkField();
  // addTinyMCEAQField();

  //code for setting image

  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let reader = new FileReader();

  if (file!=null)
  {
    reader.readAsDataURL(file);

  }

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function () {
    if (file!=null)
    {

      document.getElementById("imageValue").src = reader.result;
    }
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function addTinyMCEWorkField() {
  tinymce.init({
    selector: ".weField",
    plugins: "lists",
    toolbar: "numlist bullist",
  });
}

function addTinyMCEAQField() {
  tinymce.init({
    selector: ".eqField",
    plugins: "lists",
    toolbar: "numlist bullist",
  });
}

function RemoveHtmlElementWork(divNum) {
  // console.log(divNum);

  let divClass = document.getElementById("we");

  // let childId = document.getElementById(divNum);

  divClass.removeChild(divNum);
}

function RemoveHtmlElementAQ(divNum) {
  // console.log(divNum);

  let divClass = document.getElementById("aq");

  // let childId = document.getElementById(divNum);

  divClass.removeChild(divNum);
}

function RemoveHtmlElementSkill(divNum) {
  // console.log(divNum);

  let divClass = document.getElementById("skillArea");

  // let childId = document.getElementById(divNum);

  divClass.removeChild(divNum);
}

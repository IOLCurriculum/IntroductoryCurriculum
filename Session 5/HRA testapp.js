//This HRA testapp was developed by Rutendo Goto at the Interoperability Institute
//Date:10/12/21
//The purpose of this app is to show how a JavaScript Webapp can engage Interoperability Land (IOL) to GET and display data.
//The data retrieved and displayed by this app comes in the FHIR format
//The app retrieves 3 FHIR resources. These are Patient Resource, Questionnaire Resource, and Questionnaire Response Resource.
//There are 4 endpoints enabled by the HRA testapp
//The endpoints are /demographics, /main, /responses, and /questions



//THIS SECTION LOADS NEEDED JS PACKAGES
const express = require ('express');
const app = express();
app.engine('html', require('ejs').renderFile);
const fetch = require('node-fetch')

//THIS SECTION SETS THE REQUEST PARAMETERS INCLUDING THE AUTHORIZATION STRING FOR IOL
var myHeaders = new fetch.Headers();
myHeaders.append("Authorization", "Basic aW50ZXJvcF9waXQ6UGt4bThBTVM2ZXZFY1ZVMnU5dkFWVEFIa3lTTHpURWhmOEo5");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

//THIS SECTION GETS THE QUESTIONNAIRE RESOURCE
let qs = []
var resource;
var url = "https://zj9zdg7t-lz3r.interopland.com/blaze-global-health-system/fhir/Questionnaire/1366454/_history/1?_pretty=true.json";
 fetch("https://zj9zdg7t-lz3r.interopland.com/blaze-global-health-system/fhir/Questionnaire/1366454/_history/1?_pretty=true", requestOptions)
  .then(response => response.json())
  .then(result => resource = result)
  .then((data)=>{
     let Questions = resource.item;
     let rows = Questions.length;
     console.log(rows)
    for (i=0;i <Questions.length;i++){
       val = Questions[i].text;
       console.log(val)
//This subsection sends the questionnaire data to the web server for display at /questions
       let newq = qs.push(val)
       app.get('/questions', (req, res, next) =>{
         res.send(qs);
       });
     }
   });

//THIS SECTION GETS THE QUESTIONNAIRE RESPONSE RESOURCE
let qr = []
var resource;
fetch("https://zj9zdg7t-lz3r.interopland.com/blaze-global-health-system/fhir/QuestionnaireResponse?patient=166&questionnaire=1366454&_pretty=true", requestOptions)
.then(response => response.json())
.then(result => result.entry.map((r)=>r.resource.item).flat(2))
.then(result =>  result.forEach((item) => {
    item.answer = item.item[0].text
    console.log(item.item[0].answer[0].valueCoding.display)
//This subsection sends the questionnaire response data to the web server for display at /responses
    let qrsp =qr.push(item.item[0].answer[0].valueCoding.display)
    app.get('/responses', (req, res,next) =>{
        res.send(qr);
    });
 }));

//THIS SECTION GETS THE PATIENT RESOURCE
 let dm = []
 let jsondata = "";
 let apiUrd = "https://zj9zdg7t-lz3r.interopland.com/oak-tree-pharmacy/fhir/Patient?identifier=ffee378ba7dd4fc587e1a5ab50d9c5d6&_pretty=true.json"
  async function getjson(urd){
    let response = await fetch(urd, requestOptions);
    let data = await response.json()
    return data;
  }
//This subsection calls the getjson function to GET the patient resource
async function main() {
  jsondata = await getjson(apiUrd)
//This subsection displays the patient data on the console
fn= jsondata.entry[0].resource.name[0].family;
console.log(fn);
na= jsondata.entry[0].resource.name[0].given[0]
console.log(na)
mn= jsondata.entry[0].resource.name[0].given[1]
console.log(mn)
gndr= jsondata.entry[0].resource.gender
console.log(gndr)
dob= jsondata.entry[0].resource.birthDate
console.log(dob)
hp= jsondata.entry[0].resource.telecom[0].value
console.log(hp)
mp= jsondata.entry[0].resource.telecom[1].value
console.log(mp)
addtype= jsondata.entry[0].resource.address[0].type
console.log(addtype)
addline= jsondata.entry[0].resource.address[0].line[0]
console.log(addline)
addcity= jsondata.entry[0].resource.address[0].city
console.log(addcity)
adddist= jsondata.entry[0].resource.address[0].district
console.log(adddist)
addpstcd= jsondata.entry[0].resource.address[0].postalCode
console.log(addpstcd)

//This subsection sends the patient data to the web server for display at /demographics
let dms = dm.push(fn,na,mn,gndr,dob,hp,mp,addtype,addline,addcity,adddist,addpstcd)
app.get('/demographics', (req, res, next) =>{
  res.send(dm);
});

//This subsection renders the patient data for display at /main
app.get('/main', function(req, res) {
  res.render(__dirname + "/main.html", {dob:dob});
});
}

//THIS SECTION STARTS THE WEB SERVER ON PORT 5000
main();
app.listen(5000, () => console.log('Listening on port 5000'));

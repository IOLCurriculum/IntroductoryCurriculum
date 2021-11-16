# HRA testapp

The HRA testapp GETs a list of questions from a Health Risk Assessment questionnaire in the Blaze Global Health FHIR Pit. The app runs on local server 5000.

## To run the App and connect to the Blaze Global Health FHIR Pit in Interoperability Land, do this:

 1. Download Node.js from https://nodejs.dev/download/
 
 3. Install Node.js to your computer
 
    Note 1: To confirm that you have installed Node.js, you can see its version by running this command
    
    ```
    node --version
    ```
    
    Note 2: When installing Node.js, the Node Package Manager (npm) will also be installed. To check its version, do this:
    
    ```
    npm --version
    ```
 
 2. Then, at the terminal or command-line, install node-fetch with the following command
    
    ```
    npm install node-fetch
    ```
  
 3. Install expressjs with the following command

    ```
    npm install express --save
    ```
  
 4. Download the HRA testapp
 
 6. To run the App open a new browser and paste the following URL: http://localhost:5000/questions
  
## Code Explanation;

1. Loads JS packages to parse the body, retrieve text from the server/IOL and append the authorization password. 

2. GETs the Questionnaire Resource and sends questionnaire data to the web server for display at */questions.*

3. GETs the Questionnaire Responses Resource and sends questionnaire responses data to the web server for display at */responses*, and */main.*

4. GETs the Patient Resource and sends patient data to the web server for display at */questions.*

5. Starts the web server on port 5000


# Introduction
In this document there are 3 PostMan collections; the Medication Reconciliation Collection, the Social Determinants of Health Collection, and the Health Risk Assessment Collection. These collections are groups of Complex Multi-target FHIR Queries that enquire patient information from multiple pits in the Interoperability Land (IOL). The IOL is a HL7 FHIR sandbox that has 14 pits. These pits emulate the real healthcare environment and contain synthetic patient information.

# PostMan Collections

## Medication Reconciliation (medsrecon) Collection
The medsrecon collection is a group of Query Kits for FHIR that GET patient meds information from multiple FHIR pits. These queries GET data from the Interoperability Land (IOL) and return patient information and the first 100 medications sorted in date order, starting with the latest.

**Patient Last Name Query** GETs the specified Last Name and returns a list of all patients with the same Last Name in the same FHIR pit.

![Patient last name query](https://user-images.githubusercontent.com/59377438/132710746-3ac57f3c-2a73-4d8e-b77e-54e0f1133ffe.png)             
_Patient last name GET request_ showing a query for patients with the last name **Giles**

![Patient last name query result](https://user-images.githubusercontent.com/59377438/123436682-dcbe3700-d59c-11eb-9f8e-1977badb3941.png)

_Patient last name query result_ showing the result from the patient last name query. In the picture there are **46** results meaning that there 46 patients with the last name Giles.

**Common Key Query(CKQ)** The Common Key is a unique identifier/code that is assigned to a patient. The CKQ can only be applied to the Patient Resource. The GET request enquires the selected patient and returns the patient demographic data and the patient ID in the selected pit, when found. The Patient ID is then used to query patient information in other Resources in the same pit.


**Medication Request or Statement Queries** Enquire the Medication Request or Statement Resources and returns a list of the first 100 patient medications sorted in date order starting with the latest.

## Social Determinants of Health (SDoH) Collections
The SDoH collection is a group of Query Kits for FHIR that GET patient information from various Questionnaire Response instances and returns the selected patient's SDoH questionnaire responses.

**Patient Last Name Query** GETs the specified Last Name and returns a list of all patients with the same Last Name in the selected pit.

**Common Key Query(CKQ)** The Common Key is a unique identifier/code that is assigned to a patient. The CKQ can only be applied to the Patient Resource. The GET request enquires the selected patient and returns the patient demographic data and the patient ID in the selected pit, when found. The Patient ID is then used to query patient information in other Resources in the same pit.

![Common key query](https://user-images.githubusercontent.com/59377438/132711524-56dabef4-6a3d-4678-913f-00358bdf36bc.png)

_CKQ_ showing a GET request for using the common key.

![Common Key Query result](https://user-images.githubusercontent.com/59377438/123443277-c36cb900-d5a3-11eb-962d-853c25875a85.png)

_CKQ_ showing the result from the CKQ. The picture shows that there is **1** result meaning that the common key enquiry found the patient to whom the common key is assigned.



**Questionnaire Query** GETs the list of available questionnaires in the selected pit.

**Questionnaire Response Queries**  Enquires responses for a selected patient to a specified questionnaire in the selected pit and returns the selected patient's responses.

**Vital Signs Query** GETs all vital signs for a selected patient from the Observation Resource and sorts the patient's vital signs in date order starting with the latest.

## Health Risk Assessments (HRA) Collections
The HRA is a group of Query Kits for FHIR that GET patient information from various Questionnaire Response instances and returns the selected patient's HRA questionnaire responses.

**Patient Last Name Query** GETs the selected Last Name and returns a list of all patients with the same Last Name in the selected pit.

**Common Key Query(CKQ)** The Common Key is a unique identifier/code that is assigned to a patient. The CKQ can only be applied to the Patient Resource. The GET request enquires the selected patient and returns the patient demographic data and the patient ID in the selected pit, when found. The Patient ID is then used to query patient information in other Resources in the same pit.

**Questionnaire Query** GETs the list of all available questionnaires in the selected pit.

**Questionnaire Response Queries** Enquires questionnaire responses for a selected patient to a specified questionnaire in the selected pit and returns the selected patient's responses.

**Vital Signs Query** GETs all vital signs for a selected patient from the Observation Resource and sorts the patient's vital signs in date order starting with the latest.

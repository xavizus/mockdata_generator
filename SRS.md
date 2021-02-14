# 1. Introduction

## 1.1 Purpose
The purpose of this document is to get a detailed overview of which functionality is needed for "Mockdata Generator" application. The intended audience for this document are the developers to give a guidance of which functionality should or shall exist and the importance of the required functionality.

## 1.2 Scope
It seems that it does not exist any open-source project that allows an user to generate milions of rows of structured data that's free and simple to use. Therefore this project have been created.

## 1.3 Definitions, acronyms, and abbreviations

| Term | Definition |
| ---- | ---------- |
| A term | A definition |

# 2. Overall description

## 2.1 Product perspective
This applicaiton will be a web-based application, where the front-end will be a Single Page Application and backend will be a RESTapi. The frontend will communicate with the RESTapi over the HTTP/2 protocol.

![Image how the frontend and backend are dependent of eachother](./images/block_diagram.png)

The application will allow the user to create unlimited amount of named columns with typed data and then generate structured mock data depending on how many rows the user needs and export the generated data to a perferred format.
## 2.2 Product functions
The front-end will allow the user to specify what kind of data that the user want to generate. When the user have filled in the specification of wanted generated data, the front-end will send an api request to the backend.
![An wireframe image of proposed layout](./images/wireframe.png)

The back-end will in return, generate mock-data based of the inputs from the user, and then return the data in the specified format.
## 2.3 Intended users
The application is inteded for developers and testers that need mockdata.
## 2.4 Constraints
Because tha application will run as a back-end and front-end application, an internet connection will be needed, though it will be able to run it all on one single machine.

The application maybe used in the public domain, which may require request limiting or request queing, and therefore needs a way to to store temporary data.
## 2.5 References 
- Mockaroo.com | The project will take insperation from this site

# 3 requirements

## 3.1 Requirements layout
Requirements need to have the following layout:
- Requirment ID: ####
- Requirement type: SR, FR, EIR, NFR
    - SR - System requirement
    - FR - Functional requirement
    - EIR - External Interface Requirement
    - NFR - Non-Functional Requriement
- Priority: 1-5 (where 1 is urgent and 5 least urgent)
- Title: Short description of the requirement
- Content: Detailed information of the requiremnt
- Date of creation: YYYY-MM-DD

Example:
<table>
    <tbody>
        <tr>
            <td>
                Type: SR
            </td>
            <td>
                ID: 123
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                This is the title of the requirement!
            </td>
        </tr>
        <tr>
            <td colspan=4>
                This is the description of the requirement
            </td>
        </tr>
    </tbody>
</table>

## 3.2 System requirements

<table>
    <tbody>
        <tr>
            <td>
                Type: SR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Shall support any Linux based operatingsystem
            </td>
        </tr>
        <tr>
            <td colspan=4>
                The application shall be able to be installed onto any linux distro that support NodeJS.
            </td>
        </tr>
    </tbody>
</table>

The functional requirements or the overall description documents include the product perspective and features, operating system and operating environment, graphics requirements, design constraints and user documentation.

The appropriation of requirements and implementation constraints gives the general overview of the project in regards to what the areas of strength and deficit are and how to tackle them.

## 3.3 Functional requirements

<table>
    <tbody>
        <tr>
            <td>
                Type: FR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Request limiter
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Allow requests to be limited.
            </td>
        </tr>
    </tbody>
</table>

## 3.3 External interface requirements

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Backend programming language
            </td>
        </tr>
        <tr>
            <td colspan=4>
                The backend will be programmed in NodeJS
            </td>
        </tr>
    </tbody>
</table>

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Frontend framework
            </td>
        </tr>
        <tr>
            <td colspan=4>
                The frontend framework will be Angular (Not AngularJS)
            </td>
        </tr>
    </tbody>
</table>

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Frontend and Backend flavour
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Both the frontend and backend need to be using TypeScript
            </td>
        </tr>
    </tbody>
</table>

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Backend framework
            </td>
        </tr>
        <tr>
            <td colspan=4>
                The backend framework needs to be ExpressJS
            </td>
        </tr>
    </tbody>
</table>

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Backend framework
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Both the frontend and backend need to be using TypeScript
            </td>
        </tr>
    </tbody>
</table>

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Communication between frontend and backend
            </td>
        </tr>
        <tr>
            <td colspan=4>
                The backend need to follow the REST API standard to allow an ease communication between frontend and backend.
            </td>
        </tr>
    </tbody>
</table>

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                REST API over HTTP
            </td>
        </tr>
        <tr>
            <td colspan=4>
                The REST API need to communicate over HTTP.
                Nice to have: Instead of HTTP, support HTTP2.
            </td>
        </tr>
    </tbody>
</table>

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Screen sizes
            </td>
        </tr>
        <tr>
            <td colspan=4>
                The frontend need to support a minimal screensize of: 1366 x 768
                The frontend need to support a maximal screensize of: 3840 x 2160
            </td>
        </tr>
    </tbody>
</table>

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Screen sizes
            </td>
        </tr>
        <tr>
            <td colspan=4>
                The frontend need to support a minimal screensize of: 1366 x 768
                The frontend need to support a maximal screensize of: 3840 x 2160
            </td>
        </tr>
    </tbody>
</table>

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                Identify logged in users
            </td>
        </tr>
        <tr>
            <td colspan=4>
                User identity will be verfied with JSON Web Token.
            </td>
        </tr>
    </tbody>
</table>

---

<table>
    <tbody>
        <tr>
            <td>
                Type: EIR
            </td>
            <td>
                ID: ###
            </td>
            <td>
                DATE: 2021-02-14
            </td>
            <td>
                Priority: 1
            </td>
        </tr>
        <tr>
            <td colspan=4>
                In-memory Database
            </td>
        </tr>
        <tr>
            <td colspan=4>
                For rate-limit, an in-memory database is needed. Redis will be used.
            </td>
        </tr>
    </tbody>
</table>

Interface requirements consist of the hardware and the software interfaces along with user and communication interfaces.

- User interfaces consist of the style guides, screen layout, buttons, functions.
- The software interfaces consists of the platform, database system, front end and the backend framework, operating systems, tools and libraries.
- Hardware interfaces includes details of the hardware components like the list of supported devices, nature of data and the hardware-software interactions.
- Communications interfaces are the network server communications protocols. The requirements determine the communication standards to be utilized.

## 3.4 Non-functional requirements
The non-functional requirements constitute the following:

- Performance requirements
- Safety requirements
- Security requirements
- Software quality attributes
- Other requirements

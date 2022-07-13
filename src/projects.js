import img1 from "./img/pexels-ellie-burgin-12700791.jpg";
import img2 from "./img/pexels-ellie-burgin-12250753.jpg";
import img3 from "./img/pexels-ellie-burgin-12700792.jpg";
import img4 from "./img/pexels-ellie-burgin-12651051.jpg";
import img5 from "./img/pexels-ellie-burgin-12250749.jpg";

const projects = [
  {
    id: 1,
    name: "MarvelTube",
    github: "https://github.com/alainatividad/MarvelTube",
    site: "https://alainatividad.github.io/MarvelTube/",
    description: `This is a web application that Integrates Youtube API and
    Marvel API to produce a simpler character search experience.
    In this project, a user can either search for a Marvel
    character or click any of the pre-loaded images and the
    application would show several Youtube videos related to
    that selected character.
    
    This project is built using
    HTML, Semantic UI, a CSS framework, and several server-side
    API's namely Youtube API and Marvel API.`,
    imgSrc: img1,
  },
  {
    id: 2,
    name: "Popcornable",
    github: "https://github.com/alainatividad/Popcornable",
    site: "https://popcornable.herokuapp.com/",
    description: `Popcornable is a full stack web application where users can rate and review movies. Each movie can be selected to be viewes individually where you will see information about the movie, the movie poster, and all reviews of that movie from logged in users.`,
    imgSrc: img2,
  },
  {
    id: 3,
    name: "Workday Scheduler",
    github: "https://github.com/alainatividad/Bootstrap-WorkDay-Scheduler",
    site: "https://alainatividad.github.io/Bootstrap-WorkDay-Scheduler/",
    description: `This is a web application that Integrates Youtube API and
    Marvel API to produce a simpler character search experience.
    In this project, a user can either search for a Marvel
    character or click any of the pre-loaded images and the
    application would show several Youtube videos related to
    that selected character.
    
    This project is built using
    HTML, Semantic UI, a CSS framework, and several server-side
    API's namely Youtube API and Marvel API.`,
    imgSrc: img3,
  },
  {
    id: 4,
    name: "Weather Dashboard",
    github: "https://github.com/alainatividad/API-Weather_Dashboard/",
    site: "https://alainatividad.github.io/API-Weather_Dashboard//",
    description: `This weather dashboard shows the current weather conditions
    and five-day forecast of the city entered in the search box.
    Weather details such as temperature, wind speed, humidity,
    and UV Index are shown. A weather icon is also shown after
    the date and UV Index are highlighted to either red, yellow,
    or red to indicate whether the conditions are favorable,
    moderate, or severe respectively.
    
    The application is done using HTML, CSS, and JavaScript
    powered by third-party API's such as Bootstrap, Moment.js,
    and OpenWeather's GeoCoding and One Call APIs.`,
    imgSrc: img4,
  },
  {
    id: 5,
    name: "Note Taker",
    github: "https://github.com/alainatividad/Express.js-Note-Taker",
    site: "https://agile-everglades-71821.herokuapp.com/",
    description: `Note Taker is a web application that can be used to write and save notes. This uses an Express.js back end and will save and retrieve data from a JSON file.

    In this application, the user can create new notes, view the currently saved notes, and delete stored notes.`,
    imgSrc: img5,
  },
];

export default projects;

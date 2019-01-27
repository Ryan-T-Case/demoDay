import axios from "axios";


export default {
  // api index login 
  // login ti sign in
  getAllUsers: function() {
    return axios.get("/signup");
  },
  getUser: function(query) {
    console.log("runngin running??");
    return axios.post("/api/signin", query);
  },
  createUser: function(query) {
    return axios.post("/signup", query);
  },
  checkAuth: function(query) {
    console.log("Query in API = " + JSON.stringify(query));
    return axios.post("/api/verify", query);
  },

  saveNote: function(query) {
    return axios.put("/api/users/notes/", query);
  },
  getNote: function(query) {
    return axios.put("/api/users/notes/", query);
  },

  //Project API
  createProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },

  updateProject: function(projectData, data) {
    console.log(projectData)
    return axios.put("/api/projects/" + projectData, data);
  },

  getAllProjects: function() {
    return axios.get("/api/projects");
  },
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },

  //Developers API
  createDeveloper: function(developerData) {
    return axios.post("/api/developers", developerData);
  },

  getAllDevs: function() {
    return axios.get("/api/developers");
  },

};
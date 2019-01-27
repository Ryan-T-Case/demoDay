import axios from "axios";


export default {
  // api index login 
  // login ti sign in
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
  getDevs: function(query) {
    return axios.get("/api/developers", query);
  },

  getProjects: function(query) {
    return axios.get("/api/projects", query);
  },
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },

  getAllUsers: function() {
    return axios.get("/signup");
  },

  //Project API
  createProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },

  updateProject: function(projectData, data) {
    console.log(projectData)
    return axios.put("/api/projects/" + projectData, data);
  },  

  //Developers API
  createDeveloper: function(developerData) {
    return axios.post("/api/developers", developerData);
  }  

};
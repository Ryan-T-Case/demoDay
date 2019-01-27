import React from "react";
import NewProjectForm from "../../components/NewProjectForm";

function AdminNewProject() {
    return (
      <div>
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h1>Add New Project</h1>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12">
              <NewProjectForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default AdminNewProject;
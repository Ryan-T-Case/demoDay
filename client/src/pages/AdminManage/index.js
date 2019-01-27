import React from "react";

function AdminManage() {
    return (
      <div>
          <div className="row">
            <div className="col-12">
                <h1>Event Manager</h1>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12">
                <a className="btn btn-large" href="/manage-event/add-project">Add Project</a>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12">
                <a className="btn btn-large" href="/manage-event/view-data">View Data</a>
            </div>
          </div>
      </div>
    );
  }

export default AdminManage;
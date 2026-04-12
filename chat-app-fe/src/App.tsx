import { List, PersonCircle, Search, Image } from "react-bootstrap-icons";

function App() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/*Contacts chat*/}
        <div className="col-4 p-0">
          <div className="h-100 bg-light m-2">
            {/*Top bar*/}
            <div className="border d-flex align-items-center gap-3 p-2 ">
              <PersonCircle className="fs-3"></PersonCircle>

              <div className="input-group">
                <span className="input-group-text">
                  <Search></Search>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
              <List className="fs-3"></List>
            </div>
          </div>
        </div>

        {/*Messages chat*/}
        <div className="col-8 p-0">
          <div className="h-100">
            {/* Top bar */}
            <div className="d-flex align-items-center gap-3 p-3">
              <Image className="fs-3" />
              <h3 className="m-0">Real Estate Sale and Purchase</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

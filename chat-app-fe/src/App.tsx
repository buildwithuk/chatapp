import {
  List,
  PersonCircle,
  Search,
  Image,
  CursorFill,
  PersonFill,
} from "react-bootstrap-icons";

function App() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/*Contacts chat*/}
        <div className="col-4 p-0">
          <div className="h-100 bg-light">
            {/*Top bar*/}
            <div className="border d-flex align-items-center gap-3 p-3 ">
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
            <div className="d-flex flex-column px-4 h-50">
              <div className="d-flex text-primary gap-3 align-items-center py-4 mb-2">
                <CursorFill className="fs-4" />
                <p className="mb-0 lead">Nearby Contacts</p>
              </div>
              <div
                className="d-flex flex-column gap-3 overflow-auto"
                style={{ height: "50%" }}
              >
                <div className="d-flex align-items-center gap-3">
                  <button type="button" className="btn align-items-center w-100 text-start">
                    <PersonFill className="fs-5" />
                    <span className="text-secondary mx-3">SnazzySloth</span>
                  </button>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <button type="button" className="btn align-items-center w-100 text-start">
                    <PersonFill className="fs-5" />
                    <span className="text-secondary mx-3">TacoTuesday</span>
                  </button>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <button type="button" className="btn align-items-center w-100 text-start">
                    <PersonFill className="fs-5" />
                    <span className="text-secondary mx-3">CosmicCorgi</span>
                  </button>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <button type="button" className="btn align-items-center w-100 text-start">
                    <PersonFill className="fs-5" />
                    <span className="text-secondary mx-3">JamminJelly</span>
                  </button>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <button type="button" className="btn align-items-center w-100 text-start">
                    <PersonFill className="fs-5" />
                    <span className="text-secondary mx-3">ZenZebra</span>
                  </button>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <button type="button" className="btn align-items-center w-100 text-start">
                    <PersonFill className="fs-5" />
                    <span className="text-secondary mx-3">MellowMango</span>
                  </button>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <button type="button" className="btn align-items-center w-100 text-start">
                    <PersonFill className="fs-5" />
                    <span className="text-secondary mx-3">SassySquid</span>
                  </button>
                </div>
              </div>
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

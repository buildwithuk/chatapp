import {
  List,
  PersonCircle,
  Search,
  Image,
  CursorFill,
  PersonFill,
  BoxSeamFill,
} from "react-bootstrap-icons";

function App() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Contacts chat */}
        <div className="col-4 p-0 d-flex flex-column h-100">
          <div className="bg-light h-100 d-flex flex-column">
            {/* Top bar - fixed */}
            <div className="border d-flex align-items-center gap-3 p-3 flex-shrink-0">
              <PersonCircle className="fs-3" />
              <div className="input-group">
                <span className="input-group-text">
                  <Search />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
              <List className="fs-3" />
            </div>

            <div className="flex-grow-1 d-flex flex-column overflow-hidden">
              {/* Nearby Contacts */}
              <div
                className="d-flex flex-column flex-shrink-0"
                style={{ flexBasis: "50%", minHeight: 0 }}
              >
                <div className="d-flex text-primary gap-3 align-items-center py-4 mb-2 px-4 flex-shrink-0">
                  <CursorFill className="fs-4" />
                  <p className="mb-0 lead">Nearby Contacts</p>
                </div>
                <div className="overflow-auto px-4" style={{ flexGrow: 1 }}>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <PersonFill className="fs-5" />
                        <span className="text-secondary mx-3">SnazzySloth</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <PersonFill className="fs-5" />
                        <span className="text-secondary mx-3">TacoTuesday</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <PersonFill className="fs-5" />
                        <span className="text-secondary mx-3">CosmicCorgi</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <PersonFill className="fs-5" />
                        <span className="text-secondary mx-3">JamminJelly</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <PersonFill className="fs-5" />
                        <span className="text-secondary mx-3">ZenZebra</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <PersonFill className="fs-5" />
                        <span className="text-secondary mx-3">MellowMango</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <PersonFill className="fs-5" />
                        <span className="text-secondary mx-3">SassySquid</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics */}
              <div
                className="d-flex flex-column flex-shrink-0"
                style={{ flexBasis: "50%", minHeight: 0 }}
              >
                <div className="d-flex text-primary gap-3 align-items-center py-4 px-4 flex-shrink-0">
                  <BoxSeamFill className="fs-4" />
                  <p className="mb-0 lead">Topics</p>
                </div>
                <div className="overflow-auto px-4" style={{ flexGrow: 1 }}>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <BoxSeamFill className="fs-5" />
                        <span className="text-secondary mx-3">
                          Real Estate Sale and Purchase
                        </span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <BoxSeamFill className="fs-5" />
                        <span className="text-secondary mx-3">
                          Tech Talk & Gadgets
                        </span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <BoxSeamFill className="fs-5" />
                        <span className="text-secondary mx-3">
                          Movie & TV Show Discussions
                        </span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <BoxSeamFill className="fs-5" />
                        <span className="text-secondary mx-3">
                          Fitness & Wellness
                        </span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <BoxSeamFill className="fs-5" />
                        <span className="text-secondary mx-3">
                          Gaming Community
                        </span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <BoxSeamFill className="fs-5" />
                        <span className="text-secondary mx-3">
                          Travel & Adventure
                        </span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <BoxSeamFill className="fs-5" />
                        <span className="text-secondary mx-3">
                          Food & Cooking
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Messages chat */}
        <div className="col-8 p-0">
          <div className="h-100">
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

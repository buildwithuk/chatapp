import {
  List,
  PersonCircle,
  Search,
  Image,
  CursorFill,
  PersonFill,
  BoxSeamFill,
  PlusCircle,
  InfoCircleFill,
  AirplaneEngines,
  AirplaneFill,
  Building,
  Hospital,
  BalloonFill,
  CameraReels,
  WebcamFill,
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
              <img
                src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                alt="avatar"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block", // removes extra inline spacing
                }}
              />
              <div className="input-group flex-grow-1">
                <span className="input-group-text">
                  <Search />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
              <List
                className="fs-1"
                style={{ display: "flex", alignItems: "center" }}
              />
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
                        <img
                          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Amaya"
                          alt="avatar"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span className="text-secondary mx-3">SnazzySloth</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <img
                          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jack"
                          alt="avatar"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span className="text-secondary mx-3">TacoTuesday</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <img
                          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Maria"
                          alt="avatar"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span className="text-secondary mx-3">CosmicCorgi</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <img
                          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Oliver"
                          alt="avatar"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span className="text-secondary mx-3">JamminJelly</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <img
                          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jack"
                          alt="avatar"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span className="text-secondary mx-3">ZenZebra</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <img
                          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Oliver"
                          alt="avatar"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span className="text-secondary mx-3">MellowMango</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn align-items-center w-100 text-start"
                      >
                        <img
                          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Brian"
                          alt="avatar"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
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
                  <button type="button" className="btn ms-auto">
                    <PlusCircle className="fs-4 text-primary" />
                  </button>
                </div>
                <div className="overflow-auto px-4" style={{ flexGrow: 1 }}>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn d-flex align-items-center w-100 text-start"
                      >
                        <AirplaneEngines className="fs-2 flex-shrink-0" />
                        <div className="ms-3">
                          <div className="text-secondary">
                            Real Estate Sale and Purchanse{" "}
                          </div>
                          <div className="text-muted small">4 member(s)</div>
                        </div>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn d-flex align-items-center w-100 text-start"
                      >
                        <AirplaneFill className="fs-2 flex-shrink-0" />
                        <div className="ms-3">
                          <div className="text-secondary">
                            Tech Talk & Gadgets
                          </div>
                          <div className="text-muted small">8 member(s)</div>
                        </div>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn d-flex align-items-center w-100 text-start"
                      >
                        <Building className="fs-2 flex-shrink-0" />
                        <div className="ms-3">
                          <div className="text-secondary">
                            Movie & TV Shows discussions
                          </div>
                          <div className="text-muted small">3 member(s)</div>
                        </div>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn d-flex align-items-center w-100 text-start"
                      >
                        <Hospital className="fs-2 flex-shrink-0" />
                        <div className="ms-3">
                          <div className="text-secondary">
                            Fitness & Wellness
                          </div>
                          <div className="text-muted small">14 member(s)</div>
                        </div>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn d-flex align-items-center w-100 text-start"
                      >
                        <BalloonFill className="fs-2 flex-shrink-0" />
                        <div className="ms-3">
                          <div className="text-secondary">Gaming Community</div>
                          <div className="text-muted small">4 member(s)</div>
                        </div>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn d-flex align-items-center w-100 text-start"
                      >
                        <CameraReels className="fs-2 flex-shrink-0" />
                        <div className="ms-3">
                          <div className="text-secondary">
                            Travel & Adventure
                          </div>
                          <div className="text-muted small">1 member(s)</div>
                        </div>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn d-flex align-items-center w-100 text-start"
                      >
                        <WebcamFill className="fs-2 flex-shrink-0" />
                        <div className="ms-3">
                          <div className="text-secondary">Food & Cooking </div>
                          <div className="text-muted small">7 member(s)</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Messages chat */}
        <div className="col-8 p-0" style={{ height: "100vh" }}>
          <div className="d-flex flex-column h-100">
            {" "}
            {/* make this a flex column */}
            {/* Header - fixed top */}
            <div className="d-flex align-items-center gap-3 p-4 flex-shrink-0">
              <img
                src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                alt="avatar"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <div className="flex-grow-1">
                <h3 className="text-secondary m-0">
                  Real Estate Sale and Purchase
                </h3>
                <p className="text-muted text-light mb-0">Someone is typing</p>
              </div>
              <button className="btn">
                <InfoCircleFill className="text-muted fs-2" />
              </button>
            </div>
            {/* Scrollable message area - takes remaining space */}
            <div className="flex-grow-1 overflow-auto p-5">
              <div className="d-flex justify-content-end mb-5">
                {/* Bubble container: max 50% of parent width */}
                <div
                  className="d-flex align-items-center gap-3"
                  style={{ maxWidth: "50%" }}
                >
                  {/* Text block: right-aligned, no fixed width */}
                  <div style={{ textAlign: "right" }}>
                    {/* Single line with truncation only if exceeds bubble width */}
                    <div
                      className="text-secondary"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Hi there The quick brown fox jumps over the lazy dog Hi
                      there The quick brown fox jumps over the lazy dog Hi there
                      The quick brown fox jumps over the lazy dog Hi there The
                      quick brown fox jumps over the lazy dog
                    </div>
                    <div className="text-muted small mt-2">3:55pm</div>
                  </div>
                  {/* Avatar fixed size, no shrink */}
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                    alt="avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-5">
                {/* Bubble container: max 50% of parent width */}
                <div
                  className="d-flex align-items-center gap-3"
                  style={{ maxWidth: "50%" }}
                >
                  {/* Avatar on the left */}
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                    alt="avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  {/* Text block: left-aligned */}
                  <div style={{ textAlign: "left" }}>
                    <div
                      className="text-secondary"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Yes sure.Thw quick brown flox jumps over the laxy dog Yes
                      sure.Thw quick brown flox jumps over the laxy dog
                    </div>
                    <div className="text-muted small mt-2">3:55pm</div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-5">
                {/* Bubble container: max 50% of parent width */}
                <div
                  className="d-flex align-items-center gap-3"
                  style={{ maxWidth: "50%" }}
                >
                  {/* Text block: right-aligned, no fixed width */}
                  <div style={{ textAlign: "right" }}>
                    {/* Single line with truncation only if exceeds bubble width */}
                    <div
                      className="text-secondary"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Yes sure. But I dont know how to play it. Can you help me
                      out with it? If yes, then I would love to play it
                    </div>
                    <div className="text-muted small mt-2">3:55pm</div>
                  </div>
                  {/* Avatar fixed size, no shrink */}
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                    alt="avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-5">
                {/* Bubble container: max 50% of parent width */}
                <div
                  className="d-flex align-items-center gap-3"
                  style={{ maxWidth: "50%" }}
                >
                  {/* Avatar on the left */}
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                    alt="avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  {/* Text block: left-aligned */}
                  <div style={{ textAlign: "left" }}>
                    <div
                      className="text-secondary"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Yes sure.Thw quick brown flox jumps over the laxy dog Yes
                      sure.Thw quick brown flox jumps over the laxy dog
                    </div>
                    <div className="text-muted small mt-2">3:55pm</div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end mb-5">
                {/* Bubble container: max 50% of parent width */}
                <div
                  className="d-flex align-items-center gap-3"
                  style={{ maxWidth: "50%" }}
                >
                  {/* Text block: right-aligned, no fixed width */}
                  <div style={{ textAlign: "right" }}>
                    {/* Single line with truncation only if exceeds bubble width */}
                    <div
                      className="text-secondary"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Cool thanks. So know I think I know the drill. Lets begin!
                    </div>
                    <div className="text-muted small mt-2">3:55pm</div>
                  </div>
                  {/* Avatar fixed size, no shrink */}
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                    alt="avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-5">
                {/* Bubble container: max 50% of parent width */}
                <div
                  className="d-flex align-items-center gap-3"
                  style={{ maxWidth: "50%" }}
                >
                  {/* Avatar on the left */}
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                    alt="avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  {/* Text block: left-aligned */}
                  <div style={{ textAlign: "left" }}>
                    <div
                      className="text-secondary"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Yes sure.Thw quick brown flox jumps over the laxy dog Yes
                      sure.Thw quick brown flox jumps over the laxy dog
                    </div>
                    <div className="text-muted small mt-2">3:55pm</div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end mb-5">
                {/* Bubble container: max 50% of parent width */}
                <div
                  className="d-flex align-items-center gap-3"
                  style={{ maxWidth: "50%" }}
                >
                  {/* Text block: right-aligned, no fixed width */}
                  <div style={{ textAlign: "right" }}>
                    {/* Single line with truncation only if exceeds bubble width */}
                    <div
                      className="text-secondary"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Yes sure. Alright even I lose thats fine. I at least
                      tried.
                    </div>
                    <div className="text-muted small mt-2">3:55pm</div>
                  </div>
                  {/* Avatar fixed size, no shrink */}
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                    alt="avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-5">
                {/* Bubble container: max 50% of parent width */}
                <div
                  className="d-flex align-items-center gap-3"
                  style={{ maxWidth: "50%" }}
                >
                  {/* Avatar on the left */}
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                    alt="avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  {/* Text block: left-aligned */}
                  <div style={{ textAlign: "left" }}>
                    <div
                      className="text-secondary"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Yes sure.Thw quick brown flox jumps over the laxy dog Yes
                      sure.Thw quick brown flox jumps over the laxy dog
                    </div>
                    <div className="text-muted small mt-2">3:55pm</div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end mb-5">
                {/* Bubble container: max 50% of parent width */}
                <div
                  className="d-flex align-items-center gap-3"
                  style={{ maxWidth: "50%" }}
                >
                  {/* Text block: right-aligned, no fixed width */}
                  <div style={{ textAlign: "right" }}>
                    {/* Single line with truncation only if exceeds bubble width */}
                    <div
                      className="text-secondary"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Yes sure
                    </div>
                    <div className="text-muted small mt-2">3:55pm</div>
                  </div>
                  {/* Avatar fixed size, no shrink */}
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                    alt="avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-5">
                {/* Bubble container: max 50% of parent width */}
                <div
                  className="d-flex align-items-center gap-3"
                  style={{ maxWidth: "50%" }}
                >
                  {/* Avatar on the left */}
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery"
                    alt="avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  {/* Text block: left-aligned */}
                  <div style={{ textAlign: "left" }}>
                    <div
                      className="text-secondary"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Yes sure.Thw quick brown flox jumps over the laxy dog Yes
                      sure.Thw quick brown flox jumps over the laxy dog
                    </div>
                    <div className="text-muted small mt-2">3:55pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

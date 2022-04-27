import { createRoot, createSignal, For, Index } from "solid-js";
import Card from "./card";
import data from "./assets/data.json";
import "./styles/index.css";
import Filter from "./filter";

function App() {
  const [fData, setfData] = createSignal(data);
  const [filterData, setFilterData] = createSignal([]);

  const handleClick = (e) => {
    let key = Object.keys(e.target.dataset)[0];
    setFilterData([...filterData(), key]);
    setfData(
      data.filter((a) => {
        return a[key].includes(e.target.dataset[key]);
      })
    );
  };

  return (
    <div className="app">
      <div className="app-container-outer">
        <div className="app-container"></div>
        <Filter filters={filterData()} />
      </div>
      <div className="app-container-list">
        <div className="filter-container-search-items">
          <div className="filter-container-search-item">Javascript</div>
          <div className="filter-container-search-item">Javascript</div>
          <div className="filter-container-search-item">Javascript</div>
          <div className="filter-container-search-item">Javascript</div>
          <div className="filter-container-search-item">Javascript</div>
        </div>

        <For each={fData()}>
          {(d, i) => {
            return (
              <div className="card-desktop-container">
                <Card
                  data={d}
                  active={d.featured ? true : false}
                  onClick={handleClick}
                />
                ;
              </div>
            );
          }}
        </For>
      </div>
      <footer className="footer">
        &copy; 2022 Job Listing clone made with solidjs/stylus by nfnt
      </footer>
    </div>
  );
}

export default App;

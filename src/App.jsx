import { createRoot, createSignal, For, Index, onMount } from "solid-js";
import Card from "./card";
import data from "./assets/data.json";
import "./styles/index.css";
import Filter from "./filter";
import {
  filterData as filtering,
  dataFiltering,
  dataTags,
} from "./util/filterData";

function App() {
  const [fData, setfData] = createSignal(data);
  const [filterData, setFilterData] = createSignal([]);
  const [searchvalue, setSearchValue] = createSignal("");
  let datatags = dataTags(data);
  console.log(datatags);

  const handleClick = (e) => {
    setFilterData(filtering(filterData(), e.target.dataset));
    setfData(dataFiltering(filterData(), data));
  };

  return (
    <div className="app">
      <div className="app-container-outer">
        <div className="app-container"></div>
        <Filter
          filters={filterData()}
          setFilterData={setFilterData}
          setfData={setfData}
          searchvalue={searchvalue()}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="app-container-list">
        <Show
          when={
            searchvalue().length &&
            datatags.some((a) =>
              a.toLowerCase().includes(searchvalue().toLowerCase())
            )
          }
        >
          <div className="filter-container-search-items">
            <For
              each={datatags.filter((a) =>
                a.toLowerCase().includes(searchvalue().toLowerCase())
              )}
            >
              {(d, i) => (
                <div
                  className="filter-container-search-item"
                  onClick={(e) => {
                    setFilterData(filtering(filterData(), {}));
                    setfData(dataFiltering(filterData(), data));
                  }}
                >
                  {d}
                </div>
              )}
            </For>
          </div>
        </Show>

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

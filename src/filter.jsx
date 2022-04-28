import "./styles/filter.css";
import IconRemove from "./assets/images/icon-remove.svg";
import data from "./assets/data.json";
import { createSignal, Index, For, Show, splitProps } from "solid-js";
import { dataFiltering, removeFilterData } from "./util/filterData";

export default function Filter(props) {
  const [local, other] = splitProps(props, [
    "filters",
    "setfData",
    "searchvalue",
    "setFilterData",
    "setSearchValue",
  ]);
  return (
    <>
      <div className="filter-container">
        <div className="filter-container-inner">
          <div className="filter-container-items">
            <Show when={local.filters.length}>
              <For each={local.filters}>
                {(filter, i) => {
                  return (
                    <div className="filter-container-item">
                      <p className="filter-container-item-title">
                        {filter.value}
                      </p>
                      <div
                        className="filter-container-item-remove"
                        onClick={(e) => {
                          local.setFilterData(
                            removeFilterData(local.filters, filter)
                          );
                          local.setfData(dataFiltering(local.filters, data));
                        }}
                      >
                        <img src={IconRemove} alt="remove filter item"></img>
                      </div>
                    </div>
                  );
                }}
              </For>
            </Show>
            <div className="filter-container-item filter-container-item-empty">
              <input
                className="filter-container-item-title filter-container-item-type-here"
                contentEditable
                autofocus
                value={local.searchvalue}
                onInput={(e) => local.setSearchValue(e.target.value)}
                placeholder="Type your search here"
              ></input>
            </div>
          </div>
          <p
            className="filter-container-clear"
            onClick={(e) => {
              local.setFilterData([]);
              local.setfData(data);
            }}
          >
            Clear
          </p>
        </div>
      </div>
    </>
  );
}

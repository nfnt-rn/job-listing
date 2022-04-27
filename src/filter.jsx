import "./styles/filter.css";
import IconRemove from "./assets/images/icon-remove.svg";
import { createSignal, Index, Show, splitProps } from "solid-js";

export default function Filter(props) {
  const [local, other] = splitProps(props, ["filters"]);
  const [searchvalu, setSearchValue] = createSignal("");
  let filters = local.filters;
  return (
    <>
      <div className="filter-container">
        <div className="filter-container-inner">
          <div className="filter-container-items">
            <Show when={filters.length}>
              <Index each={filters}>
                {(filter, i) => {
                  return (
                    <div className="filter-container-item">
                      <p className="filter-container-item-title">{filter()}</p>
                      <div className="filter-container-item-remove">
                        <img src={IconRemove} alt="remove filter item"></img>
                      </div>
                    </div>
                  );
                }}
              </Index>
            </Show>

            <div className="filter-container-item filter-container-item-empty">
              <input
                className="filter-container-item-title filter-container-item-type-here"
                contentEditable
                autofocus
                onInput={(e) => setSearchValue(e.target.value)}
                placeholder="Type your search here"
              >
                Type your search here
              </input>
            </div>
          </div>
          <p className="filter-container-clear">Clear</p>
        </div>
      </div>
    </>
  );
}

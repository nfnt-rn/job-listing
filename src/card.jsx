import { splitProps } from "solid-js";
import { imageData } from "./images";
import "./styles/card.css";

export default function Card(props) {
  const [local, others] = splitProps(props, ["data", "active", "onClick"]);
  let data = local.data;

  return (
    <div
      className={
        local.active ? "card-container card-container-active" : "card-container"
      }
    >
      <div className="card-container-desktop-left">
        <div className="card-container-img">
          <img
            src={imageData[data.company.replace(/[\s.]/g, "")]}
            alt="company logo img"
          ></img>
        </div>
        <div className="card-container-details">
          <div className="card-container-details-company">
            <p className="company-title">{data.company}</p>
            {data.new ? <p className="new">NEW!</p> : null}
            {data.featured ? <p className="featured">FEATURED</p> : null}
          </div>
          <div className="card-container-details-title">{data.position}</div>
          <ul className="card-container-details-footer">
            <li className="card-container-details-footer-item">
              {data.postedAt}
            </li>
            <li className="card-container-details-footer-item">
              {data.contract}
            </li>
            <li className="card-container-details-footer-item">
              {data.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="card-container-desktop-right">
        <div className="card-container-tags">
          <p
            className="card-container-tag-item"
            data-role={data.role}
            onClick={local.onClick}
          >
            {data.role}
          </p>
          <p
            className="card-container-tag-item"
            data-level={data.level}
            onClick={local.onClick}
          >
            {data.level}
          </p>
          <For each={data.languages}>
            {(lang, i) => (
              <p
                className="card-container-tag-item"
                data-languages={lang}
                onClick={local.onClick}
              >
                {lang}
              </p>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}

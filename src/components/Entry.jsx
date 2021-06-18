import React from "react";

function Entry(propos) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {propos.img}
            </span>
            <span>{propos.name}</span>
          </dt>
          <dd>{propos.meaning}</dd>
        </div>
      </dl>
    </div>
  );
}

export default Entry;

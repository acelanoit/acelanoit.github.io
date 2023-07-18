import React from "react";

export default function Footer() {
  return (
    <div id="footer">
      <div className="container container-sub p-2 pt-3 pb-3">
        <div id="footer">
          <p class="copyright mb-5">Copyright © 2022 - {new Date().getFullYear()} Antonio Celano</p>
          <a class="attributions mb-2" href="https://www.flaticon.com/free-icons/environment" title="environment icons">Environment icons created by Freepik - Flaticon</a>
          <a class="attributions" href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Freepik - Flaticon</a>
        </div>
      </div>
    </div>
  );
};

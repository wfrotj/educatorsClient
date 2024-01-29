import React from "react";

function Home({ user, setUser }) {
  return (
    <div>
      <h1>This is the homepage</h1>
      <section>
        <iframe
          className="iframe-school"
          src="https://www.deped.gov.ph/"
        ></iframe>
      </section>
    </div>
  );
}

export default Home;

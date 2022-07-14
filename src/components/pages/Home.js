import React from "react";

// Home component just contains a header and is the first page the user would see when visiting the site
export default function Home() {
  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      <h1 className="display-2 text-center py-5">
        Hello, I'm Alyssa Natividad
      </h1>
      <h1 className="display-4 text-center py-3">
        I am a full-stack web developer
      </h1>
    </div>
  );
}

import React from "react";

export const Video = (props) => {
  return (
    <div id="video">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {/* Substituir a imagem pelo link do vídeo do YouTube */}
            <iframe
              width="100%"
              height="315"
              src={props.data ? props.data.youtubeLink : ""}
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre nós</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Por que nos escolher?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

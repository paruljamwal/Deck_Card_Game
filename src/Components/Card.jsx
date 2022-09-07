import React from "react";

const Card = ({ number, color, symbol, name }) => {
  //styling
  const mainCardContainer = {
    width: "15rem",
    height: "20rem",
    borderRadius: "7px",
    margin: "10px",
    backgroundColor: "white",
    // border:"3px solid green";
    color: `${color}`,
  };

  const cardTopSection = {
    display: "flex",
    width: "90%",
    height: "20%",
    justifyContent: "center",
    alignItems: "flex-start",
    border: "1px solid transparent",
    flexDirection: "column",
    margin: "3px auto",
  };

  const topSymbol = {
    fontSize: "25px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid transparent",
  };

  const topSymbolSingle = {
    width: "100%",
    fontSize: "30px",
    border: "1px solid transparent",
  };

  const cardMidSection = {
    width: "100%",
    display: "flex",
    border: "1px solid transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
  };

  const centerSymbol = {
    fontSize: "75px",
  };

  const cardBottomSection = {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    border: "1px solid transparent",
    margin: "50px auto",
    fontSize: "25px",
  };

  const bottomSymbol = {
    fontSize: "30px",
  };

 

  return (
    <div style={mainCardContainer}>
      {/* TopSection */}
      <div style={cardTopSection}>
        <div style={topSymbol}>
          <p>{number}</p>
          <span style={topSymbolSingle}>{symbol}</span>
        </div>
      </div>

      {/* MidSection */}
      <div style={cardMidSection}>
        {[...new Array(Number(number))].map((sym, i) => {
          i++;
          return (
            <span key={i}>
              <span style={centerSymbol}>{symbol}</span>
            </span>
          );
        })}
      </div>

      {/* BottomSection */}
      <div style={cardBottomSection}>
        <span style={bottomSymbol}>{symbol}</span>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Card;

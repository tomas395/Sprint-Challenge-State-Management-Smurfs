import React from "react";
import { connect } from "react-redux";
import SmurfForm from "./SmurfForm";
import { getSmurfs, addSmurf } from "../Actions/smurfActions";

const SmurfList = props => {
  const fetchSmurfs = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <div>
      <div>
        {props.smurf.map(smurf => (
          <p key={smurf.name}>
            {smurf.name} - Age: {smurf.age} - Height: {smurf.height}cm
          </p>
        ))}
      </div>
      <button onClick={fetchSmurfs}>Check out my smurf collection!</button>
      <SmurfForm addSmurf={props.addSmurf} />
    </div>
  );
};

const mapStateToProps = state => ({
  smurf: state.smurf,
  error: state.error
});

export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfList);

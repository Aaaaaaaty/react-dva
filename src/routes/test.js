import React from 'react';
import { connect } from 'dva';

const CountApp = ({dispatch ,count}) => {
  return (
    <div >
      <div >Highest Record: { count.record }</div>
      <div >{ count.current }</div>
      <div >
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
};
function mapStateToProps({ count }) {
  return { count };
}
export default connect(mapStateToProps)(CountApp);

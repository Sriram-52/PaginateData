import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Presentation from "./Presentation"
import { getPeople } from "../../middleware";

function Container(props) {
  const { people, _get_data } = props

  useEffect(() => {
    _get_data(1)
  }, [])

  const handleNextPage = (page) => {
    _get_data(page + 1)
  }

  return (
    <div>
      <Presentation people={people} handleNextPage={handleNextPage} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _get_data: (page) => {
      dispatch(getPeople(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
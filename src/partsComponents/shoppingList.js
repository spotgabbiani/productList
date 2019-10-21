import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {removePartFromList} from "../actions/partsActions";

export class ShoppingList extends Component{

addToList = (e, id) => {
    e.preventDefault();
    this.props.actions.removePartFromList(id);
}
  render(){
    const { shoppingList } = this.props;
    const renderItem = (item) =>(
      <li key={item.id} className="shoppingItem">
        <div>
          <p>Part name: {item.name}</p>
          <a href="" onClick={(evt) => this.addToList(evt, item.id)}>Remove from list</a>
        </div>
      </li>
  )
    return(
        <Fragment>
            <section>
            {shoppingList.length > 0 ? (
            <Fragment>
                <h2>Here's what you want to buy</h2>
                <ul>
                  {shoppingList.map(renderItem)}
                </ul>
            </Fragment>
            ) : (
                <div>
                    There's nothing here, pick something
                </div>
            )
            }
            </section>
        </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { shoppingList } = state.partsReducer;
  return { shoppingList };
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ removePartFromList }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)
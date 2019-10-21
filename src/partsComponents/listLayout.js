import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {loadParts, addPartToList} from "../actions/partsActions";
import ListItem from './listItem';
import pick from 'lodash/pick';
import sortBy from 'lodash/sortBy';
import ShoppingList from "./shoppingList";

export class ListLayout extends Component{
  constructor(props) {
    super(props);
    this.state = {sortOrder: 'default'};

    this.handleChange = this.handleChange.bind(this);
    this.sortParts = this.sortParts.bind(this);
  }

  componentDidMount(){
    this.props.actions.loadParts();
  }

  addToList = (e, id) => {
    e.preventDefault();
    const {parts} = this.props;
    const partToAdd = parts.find( (part)=> part.id===id );
    this.props.actions.addPartToList(partToAdd);
  }

  handleChange(event){
    this.setState({sortOrder: event.target.value});
  }

  sortParts(parts){
    if(this.state.sortOrder === 'lowest'){
      return sortBy(parts, 'price');
    }
    if(this.state.sortOrder === 'highest'){
      return sortBy(parts, 'price').reverse();
    }
    return parts;
  }

  render(){
    const {parts, shoppingList} = this.props;
    const partsList = parts.map((part) => {
      const inList = shoppingList.find((listPart)=> listPart.id===part.id) !== undefined;
      return {...part, inList}
    });
    const sortedParts = this.sortParts(partsList);
    return(
          <div className="main-container">
            <section className="repository-list">
            Product list: <br/>
            Order list by:
            <select onChange={this.handleChange}>
              <option value="default">default</option>
              <option value="lowest">lowest to highest</option>
              <option value="highest">highest to lowest</option>
            </select>
            <ol>
              {sortedParts.map((part)=>{
                const itemProps = pick (
                    {...part},
                    ['id', 'name', 'price', 'partNumber', 'location', 'imageUrl', 'inList']
                );
                return <ListItem key={part.id} {...itemProps} addToList={this.addToList} />
              })}
            </ol>
            </section>
            <section className="shopping-list">
              <ShoppingList />
            </section>
          </div>
    );
  }
}

const mapStateToProps = state => {
  const { parts, shoppingList } = state.partsReducer;
  return { parts, shoppingList }
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ loadParts, addPartToList }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(ListLayout)
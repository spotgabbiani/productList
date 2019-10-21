import React, {Component} from "react";

export default class ListItem extends Component {
  
  render(){
    const { id, name, price, addToList, partNumber, location, imageUrl, inList } = this.props;
    return(
      <li className="list-item" name={name}>
        <div>
          <img className="product-picture" src={imageUrl} alt=""/>
        </div>
        Part Name: {name} <br/>
        Price: {price} <br/>
        Part Number: {partNumber} <br/>
        Location: {location} <br/>
        {inList ? <div>This item is in your list</div> : <a href="" onClick={(evt) => addToList(evt, id)}>Add to list</a>}
      </li>
    );
  }
}
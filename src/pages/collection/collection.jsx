import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ collection, match }) => {
  const { title, items } = collection;
  console.log(match);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

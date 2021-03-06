import React from "react";
import PropTypes from "prop-types";
import { Delete } from "@material-ui/icons";
import {
  Card,
  List,
  IconButton,
  Avatar,
  ListItemAvatar,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import CurrencyFormat from "react-currency-format";

import img from "../../../public/images/d.jpg";

const CartItem = ({
  price,
  quantity,
  title,
  onDeleteCartItem,
}: {
  price: number;
  quantity: number;
  title: string;
  onDeleteCartItem: () => void;
}) => {
  return (
    <Card style={{ borderRadius: "2rem" }}>
      <List disablePadding>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={img.src}></Avatar>
          </ListItemAvatar>
          <ListItemText
            secondary={
              <>
                <CurrencyFormat
                  value={price}
                  thousandSeparator
                  displayType="text"
                  decimalScale={2}
                  suffix=" SDG"
                />{" "}
                x {quantity} pcs
              </>
            }
          >
            {title}
          </ListItemText>
          <ListItemIcon>
            <IconButton
              color="secondary"
              onClick={(e) => {
                e.preventDefault();
                onDeleteCartItem();
              }}
            >
              <Delete />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </Card>
  );
};

CartItem.prototype = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  onDeleteCartItem: PropTypes.func.isRequired,
};

export default CartItem;

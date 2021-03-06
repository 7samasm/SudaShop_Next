import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import PanelItem from "../PanelItem/PanelItem";
import { IProduct } from "../../../../types/Product";

const useStyles = makeStyles((theme) => {
  return {
    "mb-2": {
      marginBottom: theme.spacing(2),
    },
    "mb-5": {
      marginBottom: theme.spacing(5),
    },
  };
});

const PanelList = React.memo(
  (props: { title: string; productList: IProduct[] }) => {
    const { title, productList } = props;

    const classes = useStyles();
    const theme = useTheme();
    const titleAlignment = theme.direction === "ltr" ? "left" : "right";
    useEffect(() => {
      console.log("%c [Panel list useEffect 1nd]", "color:teal;");
    });

    const transformedProductList = productList.map(({ _id, title }) => (
      <PanelItem title={title} id={_id!} key={_id} />
    ));

    return (
      <Grid container direction="column" className={classes["mb-5"]}>
        <Typography
          className={classes["mb-2"]}
          variant="body1"
          color="secondary"
          align={titleAlignment}
        >
          {title}
        </Typography>
        {transformedProductList}
      </Grid>
    );
  }
);

export default PanelList;

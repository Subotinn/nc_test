import * as express from "express";
import {getListData} from "../app/list";

export const register = (app: express.Application) => {
  app.get("/bff/list", (req: express.Request, res: express.Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const filterData = req.query

    getListData(filterData)
      .then((items) => {
        res.send(items);
      }, (reason) => {
        res.status(500).send(reason.toString());
      });
  });
};

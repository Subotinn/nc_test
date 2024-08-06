import {BE_URL} from "./constants";

export const getListData = async ({filters}) => {
  try {
    const searchParams = new URLSearchParams(filters)
    const data = await fetch(`${BE_URL}/items.json?${searchParams.toString()}`);

    if (data.ok) {
      return await data.json();
    } else {
      console.warn('Dont get any data')
    }
  } catch (e) {
    console.log(e)
  }

  return [];
};

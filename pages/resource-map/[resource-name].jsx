import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../../redux/slices/airtableSlice";
import { toRouterString } from "../../components/nav/toRouterString";

const Page = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [resource, setResource] = useState(undefined);

  const fetchedAirtableData = useSelector(
    (state) => state.user.fetchedAirtableData
  );
  const airtableData = useSelector((state) => state.airtable.data);
  useEffect(async () => {
    if (!fetchedAirtableData) {
      console.log("fetching data...");
      await dispatch(fetchData()).unwrap();
      dispatch({ type: "user/didFetchAirtableData" });
    }
  }, []);

  useEffect(() => {
    console.log(router.query["resource-name"]);
    setResource(
      airtableData?.find((e) =>
        router.query["resource-name"].endsWith(
          toRouterString(e["Resource-Name"])
        )
      )
    );
  }, [airtableData]);

  return (
    <>
      <Button onClick={() => router.back()}>Back</Button>
      <Box>{resource && resource["Resource-Name"]}</Box>
    </>
  );
};

export default Page;

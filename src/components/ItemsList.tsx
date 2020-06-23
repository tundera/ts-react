import * as React from "react";
import { Flex, Box } from "rebass";
import Img from "react-cool-img";

const defaultItems = ["item 1", "item 2", "item 3"];

interface Props {
  items?: string[];
}

const ItemsList: React.FunctionComponent<Props> = items => {
  const [entries, setEntries] = React.useState(defaultItems);

  React.useEffect(() => {
    setEntries(defaultItems);
    console.log("set entries!");
  }, []);

  return (
    <div>
      <Flex sx={{ justifyContent: "center" }}>
        {entries.map((item, index) => (
          <Box sx={{ flex: "0 1 auto" }} key={`${item}-key`} p={2}>
            <Img placeholder={null} error={null} src={null} alt="Item image" />
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default ItemsList;

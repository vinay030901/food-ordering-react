import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ingredients = [
  { category: "Nuts & seeds", ingredients: ["Cashews"] },
  { category: "Protein", ingredients: ["ground chicken", "fishy sauce"] },
  { category: "Protein", ingredients: ["ground chicken"] },
];

export default function MenuCard() {
  const handleCheckBoxChange = (item) => {
    console.log("value changed", item);
  };
  let inStock = true;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1708317657/no8xfzdhsrdy4ezmcczr.jpg"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>₹499</p>
              <p className="text-gray-400">Nice food</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {ingredients.map(
              (
                item,
                index // map through ingredients
              ) => (
                <div key={index}>
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredients.map((ingredient, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            onChange={() => handleCheckBoxChange(item)}
                          />
                        }
                        label={ingredient}
                      />
                    ))}
                  </FormGroup>
                </div>
              )
            )}
          </div>
          <div className="pt-5">
            <Button type="submit" variant="contained" disabled={false}>
              {inStock ? "Add to cart" : "Out of stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

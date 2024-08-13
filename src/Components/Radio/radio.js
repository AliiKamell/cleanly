import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function RadioButton() {
  return (
    <>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1 radio1" value={1} name="type">
          In Door
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} name="type">
          Out Door
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} name="type">
          Offices
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default RadioButton;

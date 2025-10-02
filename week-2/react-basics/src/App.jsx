import "./App.css";
import InputExample from "./examples/InputExample";
import Button from "./examples/styling/css/Button";
import Container from "./examples/styling/css/Container";
import ButtonWithModule from "./examples/styling/module/ButtonWithModule";
import CircleSwitcher from "./oefeningen/state/CircleSwitcher";
import Counter from "./oefeningen/state/Counter";
import CreateList from "./oefeningen/state/CreateList";
import EmojiList from "./oefeningen/state/Emojilist";
import FilterList from "./oefeningen/state/FilterList";
import LoginForm from "./oefeningen/state/LoginForm";
import Share from "./oefeningen/state/Share";
import TaskList from "./oefeningen/state/TaskList";
import ToggleText from "./oefeningen/state/ToggleText";
import ToggleTextCheckbox from "./oefeningen/state/ToggleTextCheckbox";
import UserInfo from "./oefeningen/state/UserInfo";

function App() {
  return (
    <Container>
      <ButtonWithModule>Klik mij</ButtonWithModule>
    </Container>
  );
}

export default App;

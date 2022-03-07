import "./Reset.css";
import "./App.css";

import { GridProvider } from "./contexts/GridContext";
import KeyBindings from "./KeyBindings/KeyBindings";
import TextualGrid from "./TextualGrid/TextualGrid";
import VisualGrid from "./VisualGrid/VisualGrid";

const App = () => (
  <GridProvider initValue={2}>
    <main className="app">
      <header className="header">
        <h1>A11y-hex</h1>
      </header>
      <div>
        <div>
          <section className="gird-navigator">
            <section className="gird-navigator_visual">
              <VisualGrid />
            </section>
            <section className="gird-navigator_textual">
              <TextualGrid />
            </section>
          </section>
        </div>
        <section>
          <KeyBindings />
        </section>
      </div>
    </main>
  </GridProvider>
);

export default App;

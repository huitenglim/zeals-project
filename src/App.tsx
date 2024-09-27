import { mockShoppingItems } from "./mocks/mockShoppingItems";
import { convertINodeElement, convertIntShoppingItem } from "./utils/converter";
import { mockINodeElements } from "./mocks/mockNodeElements";
import './App.css';

function App() {
    const convertedShoppingItems = mockShoppingItems.map((item) => convertIntShoppingItem(item))
    const convertedINodeElements = mockINodeElements.map((item) => convertINodeElement(item))

    console.log("[ORIGINAL INTERNAL SHOPPING ITEMS]: ", mockShoppingItems);
    console.log("[CONVERTED INTERNAL SHOPPING ITEMS]: ", convertedShoppingItems);
    console.log("[ORIGINAL INTERNAL NODE ELEMENTS]: ", mockINodeElements);
    console.log("[CONVERTED INTERNAL NODE ELEMENTSS]: ", convertedINodeElements);

    return (
        <>
            <div>
                <h1>Zeals Project</h1>
                <p>Open up the console for more information</p>
            </div>
        </>
    )
}

export default App

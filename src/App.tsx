import { mockShoppingItems } from "./mocks/mockShoppingItems";
import { mockINodeElements } from "./mocks/mockNodeElements";
import { mockChats } from "./mocks/mockChats";
import { convertChat, convertINodeElement, convertIntShoppingItem } from "./utils/converter";
import './App.css';


function App() {
    const convertedShoppingItems = mockShoppingItems.map((item) => convertIntShoppingItem(item));
    const convertedINodeElements = mockINodeElements.map((item) => convertINodeElement(item, convertedShoppingItems));
    const convertedChats = mockChats.map((item) => convertChat(item, convertedINodeElements));

    console.log("[ORIGINAL INTERNAL SHOPPING ITEMS]: ", mockShoppingItems);
    console.log("[CONVERTED INTERNAL SHOPPING ITEMS]: ", convertedShoppingItems);

    console.log("[ORIGINAL INTERNAL NODE ELEMENTS]: ", mockINodeElements);
    console.log("[CONVERTED INTERNAL NODE ELEMENTS]: ", convertedINodeElements);

    console.log("[ORIGINAL CHATS]: ", mockChats);
    console.log("[CONVERTED CHATS]: ", convertedChats);

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

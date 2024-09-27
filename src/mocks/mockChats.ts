import { Chat } from "../models/InternalData";
import { randomTitle } from "../utils/randomHelper";
import { mockINodeElements } from "./mockNodeElements";

export const createSampleChats = (): Chat => {
    return {
        title: randomTitle(),
        nodesList: mockINodeElements,
    }
};

export const createChat = (amountToGenerate: number): Chat[] => {
    return Array.from({length: amountToGenerate}, () => createSampleChats());
}

export const mockChats = createChat(5);
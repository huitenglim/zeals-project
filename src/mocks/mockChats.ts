import { Chat } from "../models/InternalData";
import { randomTitle } from "../utils/randomHelper";
import { mockINodeElements } from "./mockNodeElements";

export const createSampleChats = (): Chat => {
    return {
        title: randomTitle(),
        nodesList: mockINodeElements,
    }
};

/**
 * Generate random amount of internal chats.
 * @param amountToGenerate - Number to generate.
 */
export const createChat = (amountToGenerate: number): Chat[] => {
    return Array.from({length: amountToGenerate}, () => createSampleChats());
}

export const mockChats = createChat(5);
export function getRequestIdToJoinRoom(userId, parentId) {
    try {
        if (!userId || !parentId)
            throw new Error('userId or parentId is missing');
        return `${userId}--${parentId}`;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//# sourceMappingURL=roomsCont.js.map
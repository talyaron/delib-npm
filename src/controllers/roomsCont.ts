
export function getRequestIdToJoinRoom (userId:string, parentId:string):string|undefined {
    try {
        if(!userId || !parentId) throw new Error('userId or parentId is missing');
        return `${userId}--${parentId}`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
    
}
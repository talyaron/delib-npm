export function getVoteId(userId: string, parentId: string) {
    return `${userId}--${parentId}`;
}